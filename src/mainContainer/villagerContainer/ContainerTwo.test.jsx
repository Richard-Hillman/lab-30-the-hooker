  
/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import MockVillager from '../../MockData/MockVillager.json';
import VillagerDetails from './VillagerDetails';

const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers/5f5fb4bbbfd05c2aed82e476', (req, res, ctx) => {
    return res(ctx.json(MockVillager));
  })
);

describe('AllVillagers container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('display character with loading', async() => {
    render(
      <MemoryRouter>
        <VillagerDetails
          match={{ params: { id: '5f5fb4bbbfd05c2aed82e476' } }}  
        />
      </MemoryRouter>
    );

    const figure = await screen.findByTestId('villager');

    return waitFor(() => {
      expect(figure).not.toBeEmptyDOMElement();
    });
  });
});
