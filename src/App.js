// react
import React, {Fragment} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css'
import "semantic-ui-css/semantic.min.css";

// Components
import Navbar from './components/layout/Navbar'

// Pages
import Dashboard from "./pages/Dashboard";
import CarDetails from "./pages/CarDetails";

import CarListings from './pages/CarListings'
// redux
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/car-listings" component={CarListings} />
              <Route exact path="/car-details/:id" component={CarDetails} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </Fragment>
  );
}

export default App;
