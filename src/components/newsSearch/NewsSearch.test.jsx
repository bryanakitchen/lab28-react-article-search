import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import NewsSearch from './NewsSearch';

const server = setupServer(
  rest.get('https://newsapi.org/v2/top-headlines', (req, res, ctx) => {
    return res(ctx.json({ articles: [{
      url: 'myUrl.com',
      title: 'my title',
      author: 'my author',
      description: 'the description'
    },
    ],
    }));
  }),
  rest.get('https://newsapi.org/v2/everything', (req, res, ctx) => {
    return res(ctx.json({ articles: [{
      url: 'myBetterUrl.com',
      title: 'my Cooler title',
      author: 'my Better author',
      description: 'the Best description'
    },
    ],
    }));
  })
);

describe('NewsSearch component', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  
  //   afterEach(() => cleanup());
  it('renders NewsSearch', () => {
    render(<NewsSearch />);

    const searchInput = screen.getByPlaceholderText('Search here...');
    // user.type(searchInput, 'dogs');
    fireEvent.change(searchInput, {
      target: {
        value: 'dogs'
      }
    });

    return waitFor(() => {
      expect(screen.getByTestId('articles')).toHaveTextContent('my Cooler title');
    });
  });
});
