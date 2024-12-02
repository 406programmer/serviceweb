import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import AuthContext from "../Context/AuthContext";  // Import AuthContext

export default function Navbar() {
  const { authState, dispatch } = useContext(AuthContext); // Access auth state and dispatch
  const navigate = useNavigate();

  // Handle login click
  const handleLoginClick = () => {
    navigate("/login");
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

      <div className="flex gap-2 items-center">
        <FaShoppingCart className="w-7" onClick={() => navigate("Cart")} />

        {authState.isAuthenticated ? (
          <>
            <span>Welcome, {authState.user?.UserName}</span>
            <button className={styles.button} onClick={handleLogoutClick}>Log Out</button>
          </>
        ) : (
          <button className={styles.button} onClick={handleLoginClick}>Log In</button>
        )}
      </div>
    </nav>
  );
}
