import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ArticleList from './ArticleList';

describe('ArticleList component', () => {
  afterEach(() => cleanup());
  it('renders ArticleList', () => {
    const { asFragment } = render(<ArticleList
      articles={[]}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});

// {
//     title: 'Happy Trees',
//     author: 'Bob Ross',
//     description: 'this article talks about drawing happy trees'
//   },
//   {
//     title: 'Happy Trees 2',
//     author: 'Bob Ross',
//     description: 'this article talks about drawing more happy trees'
//   },
