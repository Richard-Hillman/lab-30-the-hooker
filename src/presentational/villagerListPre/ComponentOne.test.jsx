import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import VillagersList from './ComponentOne';

describe('ComponentOne component', () => {
  afterEach(() => cleanup());
  it('renders ', () => {
    const { asFragment } = render(<BrowserRouter><VillagersList
      villagers={[]} /></BrowserRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
