import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Layout/AppHeader/header';
import Footer from '../Layout/AppFooter/footer';

const Layout = () => {
  return (
    <div>
      <Header />
      
        <Outlet /> 
      
      <Footer />
    </div>
  );
};

export default Layout;
