import { Link } from 'react-router';
import type { Post } from '../data/posts';
import { Card } from './ui/Card';
import { Tag } from './ui/Tag';

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <Card>
      <h3>{post.title}</h3>
      <p className="post-date">{post.date}</p>
      <p>{post.excerpt}</p>

      <ul className="post-tags">
        {post.tags.map((tag) => (
          <li key={tag}>
            <Tag label={tag} />
          </li>
        ))}
      </ul>

      <Link to={`/posts/${post.id}`}>Read more →</Link>
    </Card>
  );
}