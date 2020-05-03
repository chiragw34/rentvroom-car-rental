// react
import React, {Fragment} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// CSS
import './App.css'
import "semantic-ui-css/semantic.min.css";

// Components

// Pages
import CarDetails from "./pages/CarDetails";
import BookNow from './pages/BookNow'
import CarListings from './pages/CarListings'
// redux
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Router>
          <Switch>
            <div className="container">
              <Route exact path="/" component={CarListings} />
              <Route exact path="/dashboard" component={CarListings} />
              <Route exact path="/car-details" component={CarDetails} />
              <Route exact path="/book-now" component={BookNow} />
            </div>
          </Switch>
        </Router>
      </Provider>
    </Fragment>
  );
}

export default App;
