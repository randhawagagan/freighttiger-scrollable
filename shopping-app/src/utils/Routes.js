import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Cart from "../pages/Cart";
import ProductList from "../pages/ProductList";
import PageNotFound from "../pages/PageNotFound";
import Header from "../components/Header";

const Routes = () => (
  <Router history={history}>
    <Header />
    <Switch>
      <Route exact path="/" component={ProductList} />
      <Route path="/cart" component={Cart} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
);

export default Routes;
