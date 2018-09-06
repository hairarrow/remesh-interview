import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import Questions from "../../../../client/src/components/Questions";

const mockStore = configureStore();
const initialState = {
  session: [
    {
      id: 1,
      text: "What was your favorite?",
      messages: [
        {
          id: 1,
          text: "Ice cream",
          questionId: 1,
          creator: {
            id: 0,
            age: "18-20",
            income: "enough",
            livingEnvironment: "near",
            sex: "M"
          },
          votes: [
            {
              id: 0,
              age: "18-20",
              income: "a bit",
              livingEnvironment: "far",
              sex: "M"
            }
          ]
        }
      ]
    }
  ]
};

const store = mockStore(initialState);

describe("<Questions />", () => {
  describe("renders", () => {
    test("it renders the component", () => {
      const session = store.getState().session;
      const wrapper = shallow(<Questions session={session} />);
    });
  });

  describe("displays messages", () => {
    test("it sorts messages", () => {
      const session = store.getState().session;
      const sortedMessages = session[0].messages.sort(
        (a, b) => a.votes.length < b.votes.length
      );
    });
  });
});
