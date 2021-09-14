import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Cart from "../components/Cart";
import ProductList from "../components/ProductList";

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact component={Cart} path="/cart" />
      <Route component={ProductList} path="/" />
    </Switch>
  </Router>
);

export default Routes;
