import { Schema, arrayOf } from "normalizr";

const sessionSchema = Schema("session");
const questionsSchema = Schema("questions");
const usersSchema = Schema("users");
const userSchema = Schema("user");
const votesSchema = Schema("votes");
const messagesSchema = Schema("messages");

messagesSchema.define({
  votes: arrayOf(votes)
});
