import React from 'react';
import { render, cleanup, screen, fireEvent, waitFor } from '@testing-library/react';
import NewsSearch from './NewsSearch';

describe('NewsSearch component', () => {
  afterEach(() => cleanup());
  it('renders NewsSearch', () => {
    render(<NewsSearch />);

    const searchInput = screen.getByPlaceholderText('Search here...');
    fireEvent.change(searchInput, {
      target: {
        value: 'dogs'
      }
    });

    return waitFor(() => {
      expect(screen.getByTestId('articles')).not.toBeEmptyDOMElement();
    });
  });
});
