import React from 'react';
import "./rootLayout.css";
import {Link, Outlet} from "react-router-dom";

const RootLayout = () => {
  return (
    <div className='rootLayout'>
      <header>
        <Link to="/">
          <img src="/logo.png" alt="" />
          <span>
            MERN AI
          </span>
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout