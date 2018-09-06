import "./index.css";
import PropTypes from "prop-types";
import React from "react";
import AnimatedNumber from "react-animated-number";

const Message = ({ text, votes }) => (
  <div className="message">
    <AnimatedNumber
      className="message__votes"
      value={votes.length}
      duration={360 + Math.floor(Math.random() * 500) + 100}
      stepPrecision={0}
    />
    <div className="message__text">{text}</div>
  </div>
);

Message.propTypes = {
  text: PropTypes.string.isRequired,
  votes: PropTypes.array.isRequired // I know...
};

export default Message;
