import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Cart from "../components/Cart";
import ProductList from "../components/ProductList";
import PageNotFound from "../components/PageNotFound";

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={ProductList} />
      <Route path="/cart" component={Cart} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
);

export default Routes;
