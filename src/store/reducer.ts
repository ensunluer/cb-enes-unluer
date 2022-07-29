import { User } from "../types";
import { ADD_USER, DELETE_USER, SET_USER } from "./action";

const initial_state = {
  users: [],
};

const reducer = (
  state = initial_state,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case ADD_USER:
      return { ...state, users: [payload, ...state.users] };
    case SET_USER:
      return { ...state, users: payload };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user: User) => user.id !== payload.id),
      };

    default:
      break;
  }
  return state;
};

const actions = {};

export { reducer, actions };
