import Sidebar from "components/sidebar/Sidebar";
import Topbar from "components/topbar/Topbar";
import Home from "pages/home/Home";
import NewProduct from "pages/newProduct/NewProduct";
import NewUser from "pages/newUser/NewUser";
import Product from "pages/product/Product";
import ProductList from "pages/productList/ProductList";
import User from "pages/user/User";
import UserList from "pages/userList/UserList";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

const Main = () => {
  let match = useRouteMatch();

  return (
    <>
      <Topbar />

      <Sidebar />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/users" exact>
          <UserList />
        </Route>
        <Route path="/user/:userId">
          <User />
        </Route>
        <Route path="/newUser">
          <NewUser />
        </Route>
        <Route path="/shops" exact>
          <ProductList />
        </Route>
        <Route path="/shop/:productId">
          <Product />
        </Route>
        <Route path="/new-product">
          <NewProduct />
        </Route>
        <Route path="/shipment" exact>
          <UserList />
        </Route>
      </Switch>
    </>
  );
};

export default Main;
