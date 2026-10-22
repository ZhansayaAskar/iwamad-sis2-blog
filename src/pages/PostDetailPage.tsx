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
    <article>
      <h1>{post.title}</h1>
      <p className="post-date">{post.date}</p>

      <p>{post.content}</p>

      <ul className="post-tags">
        {post.tags.map((tag) => (
          <li key={tag}>
            <Tag label={tag} />
          </li>
        ))}
      </ul>

      <div style={{ margin: '16px 0' }}>
      <LikeButton postId={post.id} />
      </div>

      <Link to="/posts">← Back to all posts</Link>
    </article>
  );
}