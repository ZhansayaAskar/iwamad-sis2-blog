import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { LikeButton } from './LikeButton';
import { LikesProvider } from '../context/LikesContext';

describe('LikeButton', () => {
  it('increments the like count when clicked', async () => {
    const user = userEvent.setup();
    render(
      <LikesProvider>
        <LikeButton postId={1} />
      </LikesProvider>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('🤍 Like');

    await user.click(button);
    expect(button).toHaveTextContent('❤️ Liked (1)');
  });
});