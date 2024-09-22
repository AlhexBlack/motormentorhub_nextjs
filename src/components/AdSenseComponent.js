'use client'; // Ensure this component runs on the client-side only

import { useEffect } from 'react';
import Script from 'next/script';

export default function AdSenseComponent() {
    useEffect(() => {
        // Ensure Google AdSense ads are rendered
        if (typeof window !== 'undefined' && window.adsbygoogle) {
            try {
                // Only push adsbygoogle if it hasn't already been pushed
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                console.error('AdSense adsbygoogle push error', e);
            }
        }
    }, []);

    return (
        <div>
            {/* Load the Google AdSense script */}
            <Script
                strategy="afterInteractive" // Loads after the page is interactive
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                onError={(e) => console.error('AdSense script failed to load', e)}
            />

            {/* Google AdSense Ad */}
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-XXXXXX" // Replace with your AdSense Publisher ID
                data-ad-slot="XXXXXX" // Replace with your Ad Slot ID
                data-ad-format="auto"
                data-full-width-responsive="true"
                key={Date.now()} // Use current timestamp to ensure a unique key
            ></ins>
        </div>
    );
}
