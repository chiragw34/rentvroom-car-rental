import {
  OPEN_DIALOG,
  CLOSE_DIALOG,
} from "../types";


export const openUserForm = () => (dispatch) => {
  console.log("opening form");
  
  dispatch({ type: OPEN_DIALOG });
};

export const closeUserForm = () => (dispatch) => {
  dispatch({ type: CLOSE_DIALOG });
};
