import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import { Products } from "./pages/Products/Products";
import User from "./pages/user/User";
import Home from "./pages/home/Home";
import "./styles/global.scss"

import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Login from "./pages/login/Login";
import Product from "./pages/product/Product";
import Users from "./pages/Users/User";

function App() {


  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };





  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/users",
          element:<Users />
        },
        {
          path:"/products",
          element:<Products />
        },
        {
          path:"/users/:id",
          element:<User />
        },
        {
          path:"/products/:id",
          element:<Product />
        },
      ],
    },
    {
      path:"/login",
      element:<Login />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
