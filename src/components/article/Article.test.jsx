import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Article from './Article';

describe('Article component', () => {
  afterEach(() => cleanup());
  it('renders Article', () => {
    const { asFragment } = render(<Article
      title="Happy Trees"
      author="Bob Ross"
      description="this article talks about drawing happy trees"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
