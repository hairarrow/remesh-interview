import "./index.css";
import React from "react";
import { Link } from "react-router-dom";
import Flipper from "../ArrayFlipper";

const CONTENT = {
  questions: [
    {
      id: 1,
      question:
        "What's something you worked on that you're particularly proud of?",
      answer:
        "I'm proud of the work I did on the Real Geeks Facebook Marketing Tool. It was meant to be an internal tool and wasn't assigned many resources so I designed and developed the application by myself. After seeing how useful it was, we decided we should make it a customer facing product and I led the design and development for that project too."
    },
    {
      id: 2,
      question:
        "What is something new you recently learned and why is it awesome?",
      answer:
        "I was recently doing some research to get smoother animations on my personal website and I found a neat trick to optimize animations and memory usage. You could have to composite layers on a page: one layer is 100x100 and the other 10x10. The 100x100 layer will have a physical size of 40,000 bytes (100x100x4) and the smaller layer will run in just under 400 bytes. The trick is to give the smaller layer a `transform: scale(10)` and `will-change: transform` to make both layers look identical and optimize animations."
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
        <p>
          <a
            href="https://github.com/hairarrow/remesh-interview"
            target="_blank"
            rel="noopener noreferrer"
          >
            You can see the code for this application here.
          </a>
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
    <div className="questions__entry">
      <div className="questions__question-text">
        Table flip an array of arbitrary items.
      </div>
      <div className="questions__question-messages">
        <div className="message__container">
          <div className="message">You got it.</div>
        </div>
      </div>
      <div>
        <Flipper />
      </div>
    </div>
    <div className="questions__entry">
      <div className="questions__question-text">
        Handle JSON data from a Remesh session and filter messages using user
        metrics.
      </div>
      <div className="questions__question-messages">
        <div className="message__container">
          <div className="message">Handled.</div>
        </div>
      </div>
      <div className="homepage__action">
        <Link to="/session" className="button">
          Get Session Insights
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
