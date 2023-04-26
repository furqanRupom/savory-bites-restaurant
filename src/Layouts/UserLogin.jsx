import React from "react";
import Header from "../pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import {loginBg} from '../App.module.css'

const UserLogin = () => {
  return (
    <div
    className={`${loginBg}`}
    >
      <Header />

      <div className="pt-32 pb-32">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default UserLogin;
