import React from 'react';
import { Route, Switch } from "react-router-dom";

import './App.css';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import Auth from "./pages/auth/auth.component"

function App() {
  return (
    <div>
      <Header />
      <Switch> 
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
