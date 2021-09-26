import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Users from "./Pages/Users";
import Products from "./Pages/products/products";
import Links from "./Pages/Links";
import ProductForm from "./Pages/products/ProductForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={"/"} exact component={Users} />
        <Route path={"/login"} component={Login} />
        <Route path={"/register"} component={Register} />
        <Route path={"/user"} component={Users} />
        <Route path={"/users/:id/links"} component={Links} />
        <Route path={"/products"} component={Products} />
        <Route path={"/products/create"} component={ProductForm} />
      </BrowserRouter>
    </div>
  );
}

export default App;
