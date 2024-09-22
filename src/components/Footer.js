import Link from 'next/link'; 
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>

          <div className={styles.logo}>
            <p>Motor<span className={styles.span}>MentorHub</span></p>
          </div>

          <div className={styles.footerContentDiv}>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <hr className={styles.hr} />
              <li>
                <Link href="/car-reviews">Car Reviews</Link>
              </li>
              <hr className={styles.hr} />
              <li>
                <Link href="/maintenance-tips">Maintenance Tips</Link>
              </li>
              <hr className={styles.hr} />
              <li>
                <Link href="/latest-news">Latest News</Link>
              </li>
              <hr className={styles.hr} />
              <li>
                <Link href="/buying-guides">Buying Guides</Link>
              </li>
              <hr className={styles.hr} />
              <li>
                <Link href="/electric-vehicles">Electric Vehicles</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.contactUs}>
          <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          <li><Link href="/terms-of-services">Terms of Service</Link></li>
          <li><Link href="/about-us">About Us</Link></li>
          <p>Contact us: <a href="mailto:motormentorhub@gmail.com">motormentorhub@gmail.com</a></p>
          <p>&copy; 2024 MotorMentor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
