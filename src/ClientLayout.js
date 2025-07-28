import React from "react";
import Navbar from "../src/ComponentsA/Navbar/Navbar"; // ton navbar client
import Footer from "../src/ComponentsA/Footer/footer"; // ton footer client
import { Outlet, useLocation } from "react-router-dom";

const ClientLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <Navbar/>
      <div className="min-vh-100" style={{ paddingTop: isHome ? '0' : '120px'}}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default ClientLayout;
