import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/ArticleCard.module.css';
import Image from 'next/image';

function ArticleCard({ id, title, size, imgSrc, excerpt, author, date }) {
  return (
    <div className={`${styles.articleCard} ${styles[size]}`}>
      <div className={styles.img}>
        <Link href={`/blog/${id}`} passHref>
          <Image src={imgSrc} alt={title} />
        </Link>
      </div>

      <div className={styles.articleInfo}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
        <div className={styles.autDate}>
          <p className={styles.author}>{author}</p>
          <p className={styles.date}>{date}</p>
        </div>
      </div>

      <div className={styles.readmore}>
        <Link href={`/blog/${id}`} passHref>
          Read More <FontAwesomeIcon icon={faAngleRight} className={styles.faRight} />
        </Link>
      </div>
    </div>
  );
}

export default ArticleCard;
