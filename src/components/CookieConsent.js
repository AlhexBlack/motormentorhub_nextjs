"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link'; 
import styles from '@/styles/CookieConsent.module.css';

function CookieConsent() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setShowPopup(true);
        }
    }, []);

    const handleAcceptCookies = () => {
        localStorage.setItem('cookieConsent', 'true');
        setShowPopup(false);
    };

    const handleRejectCookies = () => {
        localStorage.setItem('cookieConsent', 'false');
        setShowPopup(false); // To close popup after rejection
    };

    return (
        showPopup && (
            <div className={styles.cookieConsent}>
                <p>
                    This website uses cookies to ensure you get the best experience on our website.{' '}
                    <Link href="/privacy-policy" passHref rel="noopener noreferrer">
                        Learn more
                    </Link>
                </p>
                <div className={styles.cookieBtnDiv}>
                    <button onClick={handleRejectCookies} className={styles.rejectBtn}>
                        Reject
                    </button>
                    <button onClick={handleAcceptCookies} className={styles.acceptBtn}>
                        Accept Cookies
                    </button>
                </div>
            </div>
        )
    );
}

export default CookieConsent;
