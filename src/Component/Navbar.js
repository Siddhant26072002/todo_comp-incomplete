import React from 'react'
import {Link,useLocation} from "react-router-dom";

export default function Navbar() {
    const location=useLocation();
  return (
    <div className='nav'>
        <Link to='/complete'
        className={`nav-links ${location.pathname === "/complete" ? "active" : ""}`}
        > Complete</Link>

        <Link to='/incomplete'
        className={`nav-links ${location.pathname === "/incomplete" ? "active" : ""}`}
        > Incomplete</Link>
    </div>
  )
}
