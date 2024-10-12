"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isSidenavVisible, setIsSidenavVisible] = useState(false);
  const pathname = usePathname();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/car-reviews', label: 'Car Reviews' },
    { path: '/maintenance-tips', label: 'Maintenance Tips' },
    { path: '/latest-news', label: 'Latest News' },
    { path: '/buying-guides', label: 'Buying Guides' },
    { path: '/electric-vehicles', label: 'Electric Vehicles' },
  ];

  const toggleSidenav = () => {
    setIsSidenavVisible(!isSidenavVisible);
  };

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <h2 className={styles.txtlogo}>
            <Link href="/" className={pathname === '/' ? styles.active : ''}>
              Motor<span>MentorHub</span>
            </Link>
          </h2>

          {/* Top Links */}
          <ul id={styles.topLinks}>
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={
                    link.path === '/'
                      ? pathname === link.path ? styles.active : ''
                      : pathname.startsWith(link.path) ? styles.active : ''
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div onClick={toggleSidenav} className={styles.hamburger}>
            <FontAwesomeIcon icon={faBars} className={styles.bar} />
          </div>

          {/* Side Navigation Links */}
          <ul className={`${styles.sideLinks} ${isSidenavVisible ? styles.active : ''}`}>
            <li onClick={toggleSidenav} className={styles.cancel}>
              <FontAwesomeIcon icon={faXmark} />
            </li>
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={
                    link.path === '/'
                      ? pathname === link.path ? styles.active : ''
                      : pathname.startsWith(link.path) ? styles.active : ''
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
