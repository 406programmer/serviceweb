import { useState } from 'react';
import styles from './AdminDash.module.css';
import AHeader from './AHeader';
import ASidebar from './ASidebar';
import AHome from './AHome';


export  default function AdminDash() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className={styles.gridContainer}>
      <div style={{width : "100vw" ,display : "flex" ,justifyContent :"center"}}>
      <ASidebar/>
      <AHome />
      </div>
        
    </div>
  );
}
