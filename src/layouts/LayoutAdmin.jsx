import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LayoutAdmin = () => {
  return (
    <div className="min-h-screen grid xl:grid-cols-4 grid-cols-1 ">
      <div className="xl:col-span-5">
        <Header />
        <div className="h-[80vh] overflow-y-scroll p-8">
          <Outlet />
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default LayoutAdmin;