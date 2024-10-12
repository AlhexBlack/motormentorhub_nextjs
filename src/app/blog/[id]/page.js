import ArticleCard from '@/components/ArticleCard';
import blogPosts from '@/utils/blogData';
import styles from '../../../styles/ArticleDetails.module.css';
import { notFound } from 'next/navigation';
import Image from 'next/image';

const latestNews = blogPosts.filter(post => post.category === 'Latest News');

export default function BlogPost({ params }) {
    const post = blogPosts.find((post) => post.id.toString() === params.id);

    if (!post) {
        return notFound();
    }

    return (
        <div className={styles.articleContainer}>
            <article className={styles.article}>
                <Image className={styles.imgAd} src={post.imgSrc} alt={post.title} />
                <h1 className={styles.titleAd}>{post.title}</h1>
                <h3 className={styles.excerptAd}>{post.excerpt}</h3>

                

                <p className={styles.articleContent}>{post.content}</p>

                
                
            </article>

            <aside className={styles.sideCont}>
                <h1>Latest News</h1>
                <div className={styles.cards}>
                    

                    {latestNews.map(post => (
                        <ArticleCard
                            key={post.id}
                            id={post.id}
                            imgSrc={post.imgSrc}
                            title={post.title}
                            size={"small"}
                            excerpt={""}
                            author={""}
                            date={""}
                        />
                    ))}

                
                </div>
            </aside>
        </div>
    );
}

export async function generateStaticParams() {
    return blogPosts.map(post => ({
        id: post.id.toString(),
    }));
}
