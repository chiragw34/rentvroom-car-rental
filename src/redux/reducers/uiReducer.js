import {
  OPEN_DIALOG,
  CLOSE_DIALOG,
} from "../types";

const initialState = {
  dialogOpen: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
  
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