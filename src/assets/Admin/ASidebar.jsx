import React from 'react';
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';
import styles from './ASidebar.module.css';

function ASidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={`${styles.sidebar} ${openSidebarToggle ? styles.sidebarResponsive : ''}`}>
      <div className={styles.sidebarTitle}>
        <div className={styles.sidebarBrand}>
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <span className={styles.closeIcon} onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className={styles.sidebarList}>
        <li className={styles.sidebarListItem}>
          <a href="">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>
        <li className={styles.sidebarListItem}>
          <a href="">
            <BsFillArchiveFill className="icon" /> Products
          </a>
        </li>
        <li className={styles.sidebarListItem}>
          <a href="">
            <BsFillGrid3X3GapFill className="icon" /> Categories
          </a>
        </li>
        <li className={styles.sidebarListItem}>
          <a href="">
            <BsPeopleFill className="icon" /> Customers
          </a>
        </li>
        <li className={styles.sidebarListItem}>
          <a href="">
            <BsListCheck className="icon" /> Inventory
          </a>
        </li>
        <li className={styles.sidebarListItem}>
          <a href="">
            <BsMenuButtonWideFill className="icon" /> Reports
          </a>
        </li>
        <li className={styles.sidebarListItem}>
          <a href="">
            <BsFillGearFill className="icon" /> Setting
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default ASidebar;