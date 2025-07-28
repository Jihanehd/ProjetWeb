import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../Admin/Components/AdminSidebar";
import AdminNavbar from "../Admin/Components/AdminNavbar";

const AdminLayout = () => {
  return (
    <div className="d-flex" style={{ height: "100vh", backgroundColor: "#f8f9fc" }}>
      <AdminSidebar />
      <div className="flex-grow-1 d-flex flex-column">
        <AdminNavbar />
        <main className="flex-grow-1 overflow-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;