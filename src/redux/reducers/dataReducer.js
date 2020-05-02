import { SET_CAR_DATA, SET_USER_DATA } from "../types";

const initialState = {
  selectedCar: {},
  userData: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CAR_DATA:
      return {
        ...state,
        selectedCar: action.payload,
      };

    case SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
}
