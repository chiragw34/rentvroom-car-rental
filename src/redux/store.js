import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import bookingReducer from "./reducers/bookingReducer";
import uiReducer from "./reducers/uiReducer";
import dataReducer from './reducers/dataReducer'

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  booking: bookingReducer,
  UI: uiReducer,
  data: dataReducer
});

const store = createStore(
  reducers,
  initialState,
  compose(applyMiddleware(...middleware))
);

export default store;
