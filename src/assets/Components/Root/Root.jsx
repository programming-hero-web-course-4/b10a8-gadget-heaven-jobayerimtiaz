import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Root = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div className=" mx-auto">
      <NavBar isHomePage={isHomePage}></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
