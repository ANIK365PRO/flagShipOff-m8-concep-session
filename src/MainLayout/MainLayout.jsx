import React from 'react';
import { Outlet } from 'react-router';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <>
      <nav className="text-3xl font-bold underline">Navbar!</nav>

      {/* {placeholder component} */}
      <Outlet></Outlet>

      <footer className="text-3xl font-bold underline">Footer!</footer>
    </>
  );
};

export default MainLayout;
