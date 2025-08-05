//Define public Pages
import React from 'react';
import Home from "../Pages/Home";
import InnerBlog from "../Pages/InnerBlog";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UserDashboard from "../Pages/UserDashboard";
import MainLayout from "../Layout/MainLayout";
//Define public Routes
const publicRoutes = [
  {
    path: "/",
    role: "Home",
    element: (
      <MainLayout>
        <Home></Home>
      </MainLayout>
    ),
  },
  {
    path: "/blog", //Paths này sau này phải có thêm id để load ra bài Blog tương ứng, tạm suy nghĩ sau
    role: "InnerBlog",
    element: <MainLayout>
      <InnerBlog></InnerBlog>
    </MainLayout>,
  },
  {
    path: "/login",
    role: "Login",
    element: <Login />,
  },
  {
    path: "/register",
    role: "Register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    role: "Dashboard",
    element:
      <MainLayout>
        <UserDashboard></UserDashboard>
      </MainLayout>
  },
];
//Define private routes
const privateRoutes = [
  {
    path: "/admin",
    role: "Admin",
    element: undefined,
  },
];
export { publicRoutes, privateRoutes };
