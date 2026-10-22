import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it, expect } from 'vitest';
import { PostCard } from './PostCard';
import type { Post } from '../data/posts';

const post: Post = {
  id: 99,
  title: 'Test Post Title',
  excerpt: 'Short excerpt',
  content: 'Full content',
  date: '1 January 2026',
  tags: ['Testing', 'React'],
  image: '/test.jpg',
};

describe('PostCard', () => {
  it('renders the post title and a link to the detail page', () => {
    render(
      <MemoryRouter>
        <PostCard post={post} />
      </MemoryRouter>
    );

    expect(screen.getByText('Test Post Title')).toBeInTheDocument();

    const link = screen.getByRole('link', { name: /read more/i });
    expect(link).toHaveAttribute('href', '/posts/99');
  });
});