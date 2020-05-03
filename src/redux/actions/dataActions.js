import { SET_CAR_DATA, SET_USER_DATA } from "../types";

// set selected car
export const setSelectedCar = (selectedCar) => (dispatch) => {
  
  localStorage.setItem('selectedCar', JSON.stringify(selectedCar))
   //console.log("localstorage: ", selectedCar);
  dispatch({
    type: SET_CAR_DATA,
    payload: selectedCar,
  });
};

// set user data
export const setUserData = (userData) => dispatch => {
  localStorage.setItem('userData', JSON.stringify(userData))
  dispatch({
    type: SET_USER_DATA,
    payload:userData
  })
}
