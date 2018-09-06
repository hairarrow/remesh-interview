import React from "react";
import FlipMove from "react-flip-move";
import Message from "../Messages";
import { sessionType } from "../../types";

const Questions = ({ session }) => (
  <div>
    {session.map(question => (
      <div key={question.id}>
        <div>{question.text}</div>
        <FlipMove>
          {question.messages
            .sort((a, b) => a.votes.length < b.votes.length)
            .map(message => (
              <div key={message.id}>
                <Message {...message} />
              </div>
            ))}
        </FlipMove>
      </div>
    ))}
  </div>
);

Questions.propTypes = {
  session: sessionType.isRequired
};

export default Questions;
