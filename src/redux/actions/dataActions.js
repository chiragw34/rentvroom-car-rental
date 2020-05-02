import { SET_CAR_DATA, SET_USER_DATA } from "../types";

// set selected car
export const setSelectedCar = (selectedCar) => (dispatch) => {
  console.log("localstorage: ",selectedCar);
  
  localStorage.setItem('selectedCar', JSON.stringify(selectedCar))
  dispatch({
    type: SET_CAR_DATA,
    payload: selectedCar,
  });
};

// set user data
export const setUserData = (userData) => dispatch => {
  localStorage.setItem('userData',JSON.stringify(userData))
  dispatch({
    type: SET_USER_DATA,
    payload:userData
  })
}
