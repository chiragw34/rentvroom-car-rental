// react
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios'

// CSS
import "./App.css";
import "semantic-ui-css/semantic.min.css";

// Pages
import CarDetails from "./pages/CarDetails";
import BookNow from "./pages/BookNow";
import CarListings from "./pages/CarListings";
// redux
import { Provider } from "react-redux";
import store from "./redux/store";

axios.defaults.baseURL = "https://rentvroom-backend.herokuapp.com";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={CarListings} />
            <Route exact path="/dashboard" component={CarListings} />
            <Route exact path="/car-details/:carId" component={CarDetails} />
            <Route exact path="/book-now/:carId" component={BookNow} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
