import { Outlet } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import styles from './AppLayout.module.css'
import RecommandedServices from './RecommandedServices.jsx'

export default function AppLayout() {
  return (
    <div className={styles.layoutcontainer}>
        <Navbar/>
    <div className={styles.content}>
      <Outlet />
     <RecommandedServices/>
    </div>
    <Footer />
  </div>
  )
}