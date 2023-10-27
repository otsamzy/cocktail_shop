import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const SharedComponent = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default SharedComponent;
