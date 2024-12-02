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
      <AHeader OpenSidebar={OpenSidebar} />
      <ASidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <AHome />
    </div>
  );
}
