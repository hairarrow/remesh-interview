import "cross-fetch/polyfill";
import { getFilters } from "./filter";

export const REQUEST_SESSION = "REQUEST_SESSION";
export const requestSession = () => ({ type: REQUEST_SESSION });

export const REQUEST_USERS = "REQUEST_USERS";
export const requestUsers = () => ({ type: REQUEST_USERS });

export const REQUEST_QUESTIONS = "REQUEST_QUESTIONS";
export const requestQuestions = () => ({ type: REQUEST_QUESTIONS });

export const REQUEST_VOTES = "REQUEST_VOTES";
export const requestVotes = () => ({ type: REQUEST_VOTES });

export const REQUEST_MESSAGES = "REQUEST_MESSAGES";
export const requestMessages = () => ({ type: REQUEST_MESSAGES });

export const RECEIVE_SESSION = "RECEIVE_SESSION";
const receiveSession = session => ({
  type: RECEIVE_SESSION,
  session
});

export const RECEIVE_USERS = "RECEIVE_USERS";
const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions
});

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const RECEIVE_VOTES = "RECEIVE_VOTES";
const receiveVotes = votes => ({
  type: RECEIVE_VOTES,
  votes
});

export const FILTER_SESSION = "FILTER_SESSION";
export const filterSession = () => (dispatch, getState) => {
  const { session, filter } = getState();
  const { questions, messages, users, votes } = session;
  const { filters } = filter;

  const enabledFilters = Object.keys(filters)
    .map(metric => ({
      [metric]: [...filters[metric]].filter(({ enabled }) => enabled === true)
    }))
    .reduce((a, b) => {
      if (b[Object.keys(b)[0]].length === 0) return { ...a };
      return { ...a, ...b };
    }, {});

  let filteredUsers = [...users];
  if (Object.keys(enabledFilters).length) {
    filteredUsers = Object.keys(enabledFilters)
      .map(metric =>
        [...users].filter(user => {
          const fis = enabledFilters[metric].map(fi => fi.metric);
          return (
            messages.map(({ creatorId }) => creatorId).includes(user.id) ||
            fis.includes(user[metric])
          );
        })
      )
      .reduce((a, b) => [...a, ...b], []);
  }

  const filteredVotes = [...votes].filter(({ userId }) =>
    [...filteredUsers].map(({ id }) => id).includes(userId)
  );

  dispatch(
    createSession({
      users: filteredUsers,
      votes: filteredVotes,
      questions,
      messages
    })
  );
};

export const getData = () => dispatch => dispatch(fetchData());

export const createSession = ({
  questions,
  messages,
  users,
  votes
}) => dispatch => {
  const organizedSession = [...questions].map(q =>
    Object.assign({}, q, {
      messages: [...messages]
        .filter(({ questionId }) => questionId === q.id)
        .map(({ creatorId, ...msg }) => ({
          ...msg,
          creator: [...users].filter(({ id }) => id === creatorId)[0],
          votes: [...votes]
            .filter(
              ({ questionId, messageId }) =>
                questionId === q.id && messageId === msg.id
            )
            .map(({ id, userId }) =>
              Object.assign(
                {},
                { id },
                [...users].filter(user => user.id === userId)[0]
              )
            )
        }))
    })
  );

  dispatch(receiveSession(organizedSession));
};

const fetchData = () => dispatch => {
  dispatch(requestMessages());
  dispatch(requestQuestions());
  dispatch(requestVotes());
  dispatch(requestUsers());
  Promise.all([
    fetch("/api/users"),
    fetch("/api/questions"),
    fetch("/api/messages"),
    fetch("/api/votes")
  ])
    .then(
      ([...data]) => Promise.all([...data].map(res => res.json())),
      err => console.log(err)
    )
    .then(([users, questions, messages, votes]) => {
      dispatch(receiveMessages(messages));
      dispatch(receiveVotes(votes));
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
      dispatch(getFilters(users));
      dispatch(
        createSession({
          users,
          questions,
          messages,
          votes
        })
      );
    });
};
