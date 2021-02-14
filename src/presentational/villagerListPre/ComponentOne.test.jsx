import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComponentOne from './ComponentOne';

describe('ComponentOne component', () => {
  afterEach(() => cleanup());
  it('renders ComponentOne', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <ComponentOne />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
