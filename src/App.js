import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import AuthRoute from "components/Common/AuthRoute";
import Auth from "pages/Auth";
import PrivateRoute from "components/Common/PrivateRoute";
import Main from "pages/Main";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <AuthRoute path="/auth">
            <Auth />
          </AuthRoute>
          <PrivateRoute path="/">
            <Main />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
