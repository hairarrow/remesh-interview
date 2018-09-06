import configureStore from "redux-mock-store";
import * as actions from "../../../../client/src/actions/session";

const mockStore = configureStore();
const store = mockStore();

describe("session actions", () => {
  beforeEach(() => {
    store.clearActions();
  });

  test("it receives questions", () => {
    store.dispatch(actions.receiveQuestions([{ age: [1] }]));
    expect(store.getActions()).toMatchSnapshot();
  });

  test("it receives votes", () => {
    store.dispatch(actions.receiveVotes([{ age: [1] }]));
    expect(store.getActions()).toMatchSnapshot();
  });

  test("it receives users", () => {
    store.dispatch(actions.receiveUsers([{ age: [1] }]));
    expect(store.getActions()).toMatchSnapshot();
  });

  test("it receives messages", () => {
    store.dispatch(actions.receiveMessages([{ age: [1] }]));
    expect(store.getActions()).toMatchSnapshot();
  });
});
