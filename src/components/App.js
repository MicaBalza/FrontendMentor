import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ComponentsList from "./ComponentsList";
import IntroComponentWithSignupForm from "./IntroComponentWithSignupForm";
import SinglePriceGridComponent from "./SinglePriceGridComponent";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={ComponentsList}></Route>
            <Route
              path="/6"
              exact
              component={IntroComponentWithSignupForm}
            ></Route>
            <Route path="/7" exact component={SinglePriceGridComponent}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
