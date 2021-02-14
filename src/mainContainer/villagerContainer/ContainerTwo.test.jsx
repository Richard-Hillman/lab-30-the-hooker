  
/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import ContainerTwo from '../villagerContainer/ContainerTwo';
import MockVillager from '../../MockData/MockVillager.json';

const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers/5f5fb4bbbfd05c2aed82e476', (req, res, ctx) => {
    return res(ctx.json(MockVillager));
  })
);

describe('ContainerOne container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('display character with loading', async() => {
    render(
      <MemoryRouter>
        <ContainerTwo
          match={{ params: { id: '5f5fb4bbbfd05c2aed82e476' } }}  
        />
      </MemoryRouter>
    );

    const ul = screen.getByText('Loading');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
