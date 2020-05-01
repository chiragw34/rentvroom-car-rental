import {
  SET_CAR_LISTINGS,
  SET_DASHBOARD,
  OPEN_DIALOG,
  CLOSE_DIALOG,
} from "../types";

const initialState = {
  dialogOpen: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CAR_LISTINGS:
      return {
        ...state,
        activeItem: "CarListings",
      };
    case SET_DASHBOARD:
      return {
        ...state,
        activeItem: "Dashboard",
      };
    case OPEN_DIALOG:
      console.log(state);
      
      return {
        ...state,
        dialogOpen: true,
      };
    case CLOSE_DIALOG:
      return {
        ...state,
        dialogOpen: false,
      };
    default:
      return state;
  }
}
