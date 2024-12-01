import { Outlet } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import styles from './AppLayout.module.css'

export default function AppLayout() {
  return (
    <div className={styles.layoutcontainer}>
        <Navbar/>
    <div className={styles.content}>
      <Outlet />
    </div>
    <Footer />
  </div>
  )
}