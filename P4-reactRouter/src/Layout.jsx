import React from "react";
import Header from "./components/header/header";
import Home from "./components/Home/Home";
import Footer from "./components/footer/footer";
import About from "./components/AboutUs/About";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout