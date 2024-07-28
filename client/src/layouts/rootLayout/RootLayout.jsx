import React from 'react';
import "./rootLayout.css";
import {Link, Outlet} from "react-router-dom";

const RootLayout = () => {
  return (
    <div className='rootLayout'>
      <header>
        <Link to="/" className='logo'>
          <img src="/logo.png" alt="" />
          <span>
            MERN AI
          </span>
        </Link>
        <div className="user">User</div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout