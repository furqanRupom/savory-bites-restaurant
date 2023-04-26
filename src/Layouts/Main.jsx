import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Hero from '../pages/Home/Hero/Hero';

const Main = () => {
    return (
        <div className="mx-auto max-w-7xl ">
        <Header />
        <Hero />
        <Outlet />
        <Footer />
        </div>
    );
};

export default Main;