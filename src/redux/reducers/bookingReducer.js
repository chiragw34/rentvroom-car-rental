import { SET_BOOKING } from "../types";

const initialState = {
  isBooked: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_BOOKING:
      return {
        ...state,
        isBooked: true,
      };
    default:
      return state;
  }
}
