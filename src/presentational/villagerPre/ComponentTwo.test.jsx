import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ComponentTwo from './ComponentTwo';

describe('ComponentTwo component', () => {
  afterEach(() => cleanup());
  it('renders ComponentTwo', () => {
    const { asFragment } = render(<ComponentTwo />);
    expect(asFragment()).toMatchSnapshot();
  });
});
