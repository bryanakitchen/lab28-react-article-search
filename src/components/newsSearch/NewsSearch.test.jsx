import React from 'react';
import { render, cleanup, screen, fireEvent, waitFor } from '@testing-library/react';
import NewsSearch from './NewsSearch';

describe('NewsSearch component', () => {
  afterEach(() => cleanup());
  it('renders NewsSearch', () => {
    render(<NewsSearch />);

    const searchInput = screen.getByLabelText('Search Box');
    fireEvent.change(searchInput, {
      target: {
        value: 'tesla'
      }
    });

    return waitFor(() => {
      expect(searchInput).toHaveValue('tesla');
    });
  });
});
