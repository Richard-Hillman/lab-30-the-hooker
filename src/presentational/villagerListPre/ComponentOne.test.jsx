import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ComponentOne from './ComponentOne';

describe('ComponentOne component', () => {
  afterEach(() => cleanup());
  it('renders ', () => {
    const { asFragment } = render(<ComponentOne />);
    expect(asFragment()).toMatchSnapshot();
  });
});
