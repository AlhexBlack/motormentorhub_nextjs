// app/layout.tsx (Server Component)

import './globals.css';
import Navbar1 from '../components/NavBar1';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import Script from 'next/script';

export const metadata = {
  title: 'MotorMentorHub - Steering You Through the World of Cars',
  description: 'Explore in-depth car reviews, maintenance tips, and the latest news on electric vehicles and more at MotorMentorHub.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/images/mmhLogo.ico" />
        <link rel="canonical" href="https://motormentorhub.com.ng/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#EDF2F4" />
        <meta name="title" content="MotorMentorHub - Steering You Through the World of Cars" />
        <meta
          name="description"
          content="Explore in-depth car reviews, maintenance tips, and the latest news on electric vehicles and more at MotorMentorHub."
        />
        <meta name="image" content="/images/pcmmh5.jpg" />
        <meta name="url" content="https://motormentorhub.com.ng/" />
        <meta name="type" content="website" />
        <meta name="google-adsense-account" content="ca-pub-2885959714607738" />

        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-9MFNWF365R" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9MFNWF365R');
            `,
          }}
        />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          crossOrigin="anonymous"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-2885959714607738",
                enable_page_level_ads: true
              });
            `,
          }}
        />
      </head>
      <body>
        <div className="app">
          <Navbar1 />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
        </div>
      </body>
    </html>
  );
}
