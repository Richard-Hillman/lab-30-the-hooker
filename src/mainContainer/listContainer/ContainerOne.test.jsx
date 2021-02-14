
import React from 'react';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import AllVillagers from './AllVillagers';

describe('AllVillager Container', () => {
  afterEach(() => cleanup());
  it('displays list of characters', async() => {
    render(<AllVillagers />);

    const ul = screen.getByText('Loading');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
