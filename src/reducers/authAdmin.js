import { IS_ADMIN } from "../actions/types";

const initialState = {
  isAdmin: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case IS_ADMIN:
      return {
        ...state,
        isAdmin:action.payload
      };
    default:
      return state;
  }
}
