import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Products from "../components/products/Products";
import CheckoutPage from "../components/checkout/CheckoutPage";
import About from "../components/about/About";
import Success from "../components/success/Success";
import NotFound from "../components/notfound/NotFound";
import Contact from "../components/contact/Contact";

export default function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route exact path="/checkout/">
          <CheckoutPage />
        </Route>
        <Route exact path="/success/">
          <Success />
        </Route>
        <Route exact path="/about/">
          <About />
        </Route>
        <Route exact path="/contacts/">
          <Contact />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
