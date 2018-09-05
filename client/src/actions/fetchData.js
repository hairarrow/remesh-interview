import "cross-fetch/polyfill";

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
      dispatch(
        receiveSession({
          users,
          questions,
          messages,
          votes
        })
      );
    });
};

export const getData = () => dispatch => dispatch(fetchData());
