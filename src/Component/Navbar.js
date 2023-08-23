import React from 'react'
import {Link,useLocation} from "react-router-dom";

export default function Navbar() {
    const location=useLocation();
  return (
    <div>
        <Link to='/complete'
        className={`${location.pathname === "/complete" ? "active" : ""}`}
        > Complete</Link>

        <Link to='/incomplete'
        className={`${location.pathname === "/incomplete" ? "active" : ""}`}
        > Incomplete</Link>
    </div>
  )
}
