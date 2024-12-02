import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import AuthContext from "../Context/AuthContext";  
import { FaUserCircle } from "react-icons/fa";// Import AuthContext

export default function Navbar() {
  const { authState, dispatch } = useContext(AuthContext); // Access auth state and dispatch
  const navigate = useNavigate();

  // Handle login click
  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleCartClick = () => {
    navigate("/cart");
    window.scrollTo(0, 0); // Scroll to the top of the window
  };


  // Handle logout click
  const handleLogoutClick = () => {
    dispatch({ type: "LOGOUT" });  // Dispatch logout action to reset authentication
  };

  return (
    <nav className={styles.nav}>
      <div>
        <img className={styles.logo} src={logo} alt="logoicon" />
      </div>

      <div className={styles.menu}>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/about">About</Link></div>
        <div><Link to="/team">Team</Link></div>
        <div><Link to="/services">Services</Link></div>
        <div><Link to="/contact">Contact Us</Link></div>
      </div>

      <div className="flex gap-3 items-center">
        <FaShoppingCart style={{ fontSize: '30px'  }} onClick={handleCartClick} />

        {authState.isAuthenticated ? (
          <>
            <span>{authState.isAuthenticated && <FaUserCircle style={{ fontSize: '30px',margin : " 0px 20px", }}/> }</span>
            <button className={styles.button} onClick={handleLogoutClick}>Log Out</button>
          </>
        ) : (
          <button className={styles.button} onClick={handleLoginClick}>Log In</button>
        )}
      </div>
    </nav>
  );
}
