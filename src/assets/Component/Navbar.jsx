import BasicButton from "./BasicButton";
import styles from "./Navbar.module.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  
const { loginWithRedirect,isAuthenticated,user,logout } = useAuth0();

  return (
    <>
      <nav className={styles.nav}>
        <div ><img className={styles.logo} src={logo} alt="logoicon" /></div>
    
        <div className={styles.menu}>
        <div><Link to="/" >Home</Link></div>  
        <div><Link to="/about">About</Link></div>
        <div><Link to="/team" >Team</Link></div>
        <div><Link to="/services" >Services</Link></div>
        <div><Link to="/contact" >Contact Us</Link> </div>
        </div>
        { !isAuthenticated &&
    <button onClick={() => loginWithRedirect()} className={styles.button}>Log In</button> 
    }
      { isAuthenticated &&
      <><p>Welcome {user.name}</p>
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
      </button></>
    
  }</nav>
    </>
  );
}
