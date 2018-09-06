import "./index.css";
import React from "react";
import { Link } from "react-router-dom";

const CONTENT = {
  questions: [
    {
      id: 1,
      question:
        "What's something you worked on that you're particularly proud of?",
      answer: "something awesome"
    }
  ]
};

const Home = () => (
  <div className="homepage">
    <div className="homepage__hero">
      <h1 className="homepage__header">Hello Remesh!</h1>
      <div className="homepage__content">
        <p>
          Thank you for taking the time to review this code! Please let me know
          if you have any suggestions. I hope we get to chat about what could
          have made this spike better!
        </p>
      </div>
    </div>
    {CONTENT.questions.map(({ id, question, answer }) => (
      <div key={id} className="questions__entry">
        <div className="questions__question-text">{question}</div>
        <div className="questions__question-messages">
          <div className="message__container">
            <div className="message">{answer}</div>
          </div>
        </div>
      </div>
    ))}
    <Link to="/session">session</Link>
  </div>
);

export default Home;
