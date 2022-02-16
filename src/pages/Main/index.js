import { Box, Container } from "@material-ui/core";
import Sidebar from "components/sidebar/Sidebar";
import Topbar from "components/topbar/Topbar";
import Home from "pages/home/Home";
import NewProduct from "pages/newProduct/NewProduct";
import NewUser from "pages/newUser/NewUser";
import Product from "pages/product/Product";
import ProductList from "pages/productList/ProductList";
import ShipmentList from "pages/shipmentList/shipmentList";
import User from "pages/user/User";
import UserList from "pages/userList/UserList";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const Main = () => {
  return (
    <Container style={{ width: "100%", padding: 0, maxWidth: "100%" }}>
      <Topbar />
      <Box display="flex">
        <Sidebar />

        <Switch>
          <Route path="/home" exact>
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
            <ShipmentList />
          </Route>
          
          <Route path={`/shipment/:id`} exact>
            <ShipmentList />
          </Route>
          <Redirect from="/" to="/home" />
        </Switch>
      </Box>
    </Container>
  );
};

export default Main;
