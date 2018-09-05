import { shape, number, string, arrayOf } from "prop-types";

export const messageType = shape({
  id: number.isRequired,
  creatorId: number.isRequired,
  questionId: number.isRequired,
  text: string.isRequired
});

export const messagesType = arrayOf(messageType);

export const questionType = shape({
  id: number.isRequired,
  text: string.isRequired
});

export const questionsType = arrayOf(questionType);

export const userType = shape({
  id: number.isRequired,
  age: string.isRequired,
  income: string.isRequired,
  livingEnvironment: string.isRequired,
  sex: string.isRequired
});

export const usersType = arrayOf(userType);

export const voteType = shape({
  id: number.isRequired,
  messageId: number.isRequired,
  questionId: number.isRequired,
  userId: number.isRequired
});

export const votesType = arrayOf(voteType);

export const sessionType = shape({
  votes: votesType,
  users: usersType,
  messages: messagesType,
  questions: questionsType
});
