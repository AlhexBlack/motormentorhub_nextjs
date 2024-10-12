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
        } else if (consent === 'true') {
            enableGoogleAds();
        }
    }, []);

    const handleAcceptCookies = () => {
        localStorage.setItem('cookieConsent', 'true');
        setShowPopup(false);
        document.cookie = "userConsent=true; SameSite=None; Secure; Path=/; Expires=Fri, 31 Dec 9999 23:59:59 GMT";
        enableGoogleAds();
    };

    const handleRejectCookies = () => {
        localStorage.setItem('cookieConsent', 'false');
        setShowPopup(false);
        disableGoogleAds();
    };

    const enableGoogleAds = () => {
        if (!document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]')) {
            const script = document.createElement('script');
            script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
            script.async = true;
            script.setAttribute('data-ad-client', 'ca-pub-2885959714607738');
            document.head.appendChild(script);

            script.onload = () => {
                (window.adsbygoogle = window.adsbygoogle || []).push({
                    google_ad_client: "ca-pub-2885959714607738",
                    enable_page_level_ads: true
                });
            };
        }
    };

    const disableGoogleAds = () => {
        const adScript = document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]');
        if (adScript) {
            adScript.remove();
        }
        const adElements = document.querySelectorAll('.adsbygoogle');
        adElements.forEach(ad => {
            ad.remove();
        });
        console.log("Google Ads disabled and removed");
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
