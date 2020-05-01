import {
  SET_CAR_LISTINGS,
  SET_DASHBOARD,
  OPEN_DIALOG,
  CLOSE_DIALOG,
} from "../types";

export const setDashboard = () => (dispatch) => {
  dispatch({ type: SET_DASHBOARD });
};

export const setCarListings = () => (dispatch) => {
  dispatch({ type: SET_CAR_LISTINGS });
};

export const openUserForm = () => (dispatch) => {
  console.log("opening form");
  
  dispatch({ type: OPEN_DIALOG });
};

export const closeUserForm = () => (dispatch) => {
  dispatch({ type: CLOSE_DIALOG });
};
