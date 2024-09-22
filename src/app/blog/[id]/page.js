import ArticleCard from '@/components/ArticleCard'; // Adjust the path if needed
import blogPosts from '@/utils/blogData'; // Adjust the path if needed
import styles from '../../../styles/ArticleDetails.module.css';
import { notFound } from 'next/navigation';
import AdSenseComponent from '../../../components/AdSenseComponent'; // Separate client-side component

const latestNews = blogPosts.filter(post => post.category === 'Latest News');

// Blog post component
export default function BlogPost({ params }) {
    const post = blogPosts.find((post) => post.id.toString() === params.id);

    if (!post) {
        return notFound(); // If the post is not found, return the NotFound component
    }

    return (
        <div className={styles.articleContainer}>
            <article className={styles.article}>
                <img className={styles.imgAd} src={post.imgSrc} alt={post.title} />
                <h1 className={styles.titleAd}>{post.title}</h1>
                <h3 className={styles.excerptAd}>{post.excerpt}</h3>

                {/* Use the client-side AdSense component */}
                <AdSenseComponent />

                <p className={styles.articleContent}>{post.content}</p>

                {/* Ad at the bottom of the article */}
                <AdSenseComponent />
            </article>

            <aside className={styles.sideCont}>
                <h1>Latest News</h1>
                <div className={styles.cards}>
                    {/* Ad at the top of the sidebar */}
                    <AdSenseComponent />

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

                    {/* Ad at the bottom of the sidebar */}
                    <AdSenseComponent />
                </div>
            </aside>
        </div>
    );
}

// Server-side function to generate static paths
export async function generateStaticParams() {
    return blogPosts.map(post => ({
        id: post.id.toString(),
    }));
}
