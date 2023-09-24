import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Header/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
