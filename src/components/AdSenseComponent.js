'use client'; // Ensure this component runs on the client-side only

import { useEffect } from 'react';
import Script from 'next/script';

export default function AdSenseComponent({ adFormat = 'auto', adSlot, adStyle = {}, adLayoutKey }) {
    useEffect(() => {
        // Ensure Google AdSense ads are rendered
        if (typeof window !== 'undefined' && window.adsbygoogle) {
            try {
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
                strategy="afterInteractive"
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2885959714607738"
                crossorigin="anonymous"
                onError={(e) => console.error('AdSense script failed to load', e)}
            />

            {/* Google AdSense Ad */}
            <div className='adCard'>
            <ins
                className="adsbygoogle"
                style={{ display: 'block', ...adStyle }} // Apply custom style
                data-ad-client="ca-pub-2885959714607738" // Your AdSense Publisher ID
                data-ad-slot={adSlot} // Dynamic Ad Slot ID
                data-ad-format={adFormat} // Dynamic format (e.g., auto, horizontal, etc.)
                data-full-width-responsive="true"
                data-ad-layout-key={adLayoutKey} // Optional layout key for in-feed or in-article ads
                key={Date.now()} // Unique key to trigger re-render
            ></ins>
            </div>
        </div>
    );
}
