import React from "react";
import NavBar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Dashbord from "./Dashbord";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet>
          <Dashbord />
        </Outlet>
      </main>
    </>
  );
};

export default RootLayout;
