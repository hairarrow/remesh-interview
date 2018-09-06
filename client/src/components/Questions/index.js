import "./index.css";
import React from "react";
import FlipMove from "react-flip-move";
import Message from "../Messages";
import { sessionType } from "../../types";

const Questions = ({ session }) => (
  <div className="questions">
    {session.map(question => (
      <div className="questions__entry" key={question.id}>
        <div className="questions__question-text">{question.text}</div>
        <FlipMove className="questions__question-messages">
          {question.messages
            .sort((a, b) => a.votes.length < b.votes.length)
            .map(message => (
              <div key={message.id} className="message__container">
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
