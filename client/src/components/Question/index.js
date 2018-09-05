import React from "react";
import { questionsType } from "../../types";

const Questions = ({ questions }) => (
  <div>
    {questions.map(({ id, text }) => (
      <div key={id}>{text}</div>
    ))}
  </div>
);

Questions.defaultProps = { questions: [] };

Questions.propTypes = {
  questions: questionsType
};

export default Questions;
