import blogPosts from './blogData'

const stripHtmlTags = (text) => {
  const doc = new DOMParser().parseFromString(text, 'text/html');
  return doc.body.textContent || ""
};

export const searchBlogs = (query) => {
    if (!query) return [];

  const lowerQuery = query.toLowerCase();

  return blogPosts.filter( (post) =>

      post.title.toLowerCase().includes(lowerQuery) || stripHtmlTags(post.content).toLowerCase().includes(lowerQuery)
    );
};

export default searchBlogs;