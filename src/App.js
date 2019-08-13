import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

const Womens = () => (
  <div>
    <Link to="/">Back to home</Link>
    <h1>VOUS LES FEMMES</h1>
  </div>
);

const Topics = () => (
  <div>
    <Link to="/">Back to home</Link>
    <h1>TOPICS</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/shop/womens" component={Womens} />
        <Route path="/topics" component={Topics} />
      </Switch>
    </div>
  );
}

export default App;
