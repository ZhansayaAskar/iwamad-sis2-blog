import { useParams, Link } from 'react-router';
import { posts } from '../data/posts';
import { LikeButton } from '../components/LikeButton';
import { Tag } from '../components/ui/Tag';

export function PostDetailPage() {
  const { id } = useParams();
  const postId = Number(id);
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return (
      <section>
        <h1>Post not found</h1>
        <p>We couldn't find a post with that id.</p>
        <Link to="/posts">← Back to all posts</Link>
      </section>
    );
  }

  return (
    <div style={{ padding: '20px 0' }}>
      <h1>{post.title}</h1>
      <p className="post-date">{post.date}</p>

      <img 
        src={`${import.meta.env.BASE_URL}${post.image.replace('/', '')}`} 
        alt={post.title} 
        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '8px', margin: '20px 0' }}
      />

      <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>{post.content}</p>

      <div style={{ margin: '20px 0' }}>
        {post.tags.map((tag) => (
          <span key={tag} style={{ marginRight: '8px' }}>
            <Tag label={tag} />
          </span>
        ))}
      </div>

      <div style={{ margin: '24px 0' }}>
        <LikeButton postId={post.id} />
      </div>

      <Link to="/posts">← Back to all posts</Link>
    </div>
  );
}