import { combineReducers, createStore } from "redux";

import thunk from "redux-thunk";
import * as users from "./reducer";

const reducers = combineReducers({
  users: users.reducer,
});

export const store = createStore(reducers);
const actions = {
  user: users.actions,
};
