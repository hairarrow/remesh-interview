import configureStore from "redux-mock-store";
import * as filterActions from "../../../../client/src/actions/filter";

const mockStore = configureStore();
const store = mockStore();

describe("filter actions", () => {
  beforeEach(() => {
    store.clearActions();
  });

  test("it receives filters", () => {
    store.dispatch(filterActions.receiveFilters({ age: [] }));
    expect(store.getActions()).toMatchSnapshot();
  });
});
