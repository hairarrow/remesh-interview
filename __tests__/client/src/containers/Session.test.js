import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import Session from "../../../../client/src/containers/Session";

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

describe("<Session />", () => {
  describe("renders", () => {
    test("it renders the component", () => {
      const session = store.getState().session;
      const wrapper = shallow(
        <Provider store={store}>
          <Session session={session} />
        </Provider>
      );
    });
  });
});
