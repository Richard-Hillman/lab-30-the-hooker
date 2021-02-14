import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Villager from './ComponentTwo';

describe('ComponentTwo component', () => {
  afterEach(() => cleanup());
  it('renders ComponentTwo', () => {
    const { asFragment } = render(<Villager />);
    expect(asFragment()).toMatchSnapshot();
  });
});
