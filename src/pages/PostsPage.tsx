import { posts } from '../data/posts';
import { PostCard } from '../components/PostCard';

export function PostsPage() {
  return (
    <section>
      <h1>Posts</h1>

      {posts.length > 0 ? (
        <div className="posts-grid">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p>No posts yet.</p>
      )}
    </section>
  );
}