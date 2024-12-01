import styles from "./Navbar.module.css";
import logo from "../images/logo.png";
import { Link,useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate(); 
  const handleLoginClick = () => {
    navigate('/login'); // Navigate to /login when button is clicked
  };

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
    <div className=" flex gap-1">
    <button className={styles.button} onClick={handleLoginClick}>Log In</button> 
    <button className={styles.button}>Log Out</button>
      </div>    
    
  </nav>
    </>
  );
}
