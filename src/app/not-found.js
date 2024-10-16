import Link from 'next/link';
import styles from '../styles/pages.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function NotFound() {
  return (
    <div className={styles.notFoundPage}>
      <h1 className={styles.four}>404</h1>
      <h3 className={styles.nothing}>There&apos;s NOTHING here...</h3>
      <p className={styles.exist}>...maybe the page you&apos;re looking for is not found or never existed</p>
      <button className={styles.backHome}>
        <Link className={styles.notflink} href="/">Go Back to Home <FontAwesomeIcon icon={faAngleRight} className={styles.faRight} /></Link>
      </button>
    </div>
  );
}

export default NotFound;
