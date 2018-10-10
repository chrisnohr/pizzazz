import { SHOW_VALID, SEND_SOLUTION } from '../actionTypes';

const showValidReducer = (state = 0, action) => {
  switch (action.type) {
    case SHOW_VALID:
      return state !== action.index ? action.index : state;
    case SEND_SOLUTION:
      return 0;
    default:
      return state;
  }
};

export default showValidReducer;
