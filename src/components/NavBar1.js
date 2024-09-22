"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../styles/Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const router = useRouter();
  const [selectedLink, setSelectedLink] = useState(null);
  const [isSidenavVisible, setIsSidenavVisible] = useState(false);

  useEffect(() => {
    switch (router.pathname) {
      case '/':
        setSelectedLink('Home');
        break;
      case '/car_reviews':
        setSelectedLink('CarReviews');
        break;
      case '/maintenance_tips':
        setSelectedLink('MaintenanceTips');
        break;
      case '/latest_news':
        setSelectedLink('LatestNews');
        break;
      case '/buying_guides':
        setSelectedLink('BuyingGuides');
        break;
      case '/electric_vehicles':
        setSelectedLink('ElectricVehicles');
        break;
      default:
        setSelectedLink(null);
    }
  }, [router.pathname]);

  const links = [
    { path: '/', label: 'Home', id: 'Home' },
    { path: '/car-reviews', label: 'Car Reviews', id: 'CarReviews' },
    { path: '/maintenance-tips', label: 'Maintenance Tips', id: 'MaintenanceTips' },
    { path: '/latest-news', label: 'Latest News', id: 'LatestNews' },
    { path: '/buying-guides', label: 'Buying Guides', id: 'BuyingGuides' },
    { path: '/electric-vehicles', label: 'Electric Vehicles', id: 'ElectricVehicles' },
  ];

  const handleLinkClick = (linkId) => {
    setSelectedLink(linkId);
    setIsSidenavVisible(false);
  };

  const toggleSidenav = () => {
    setIsSidenavVisible(!isSidenavVisible);
  };

  return (
    <div>
      <nav className='nav'>
        <div className='navdiv'>
          <h2 className='namelogo'>
            <Link href="/" id='link' className={selectedLink === 'Home' ? styles.active : ''} onClick={() => handleLinkClick('Home')}>
              Motor<span className='spanMen'>MentorHub</span>
            </Link>
          </h2>

          {/* Top Links */}
          <ul id='toplinks' className={styles.topLinks}>
            {links.map((link) => (
              <li key={link.id}>
                <Link id='linktoo' href={link.path} className={selectedLink === link.id ? styles.active : ''} onClick={() => handleLinkClick(link.id)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div onClick={toggleSidenav} className={styles.hamburger}>
            <FontAwesomeIcon icon={faBars}/>
          </div>

          {/* Side Navigation Links */}
          <ul className={`${styles.sideLinks} ${isSidenavVisible ? styles.active : ''}`}>
            <li onClick={toggleSidenav} className={styles.cancel}>
              <FontAwesomeIcon icon={faXmark}/>
            </li>
            {links.map((link) => (
              <li key={link.id}>
                <Link href={link.path} className={selectedLink === link.id ? styles.active : ''} onClick={() => handleLinkClick(link.id)}>
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
