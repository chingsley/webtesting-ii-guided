import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
// import '@testing-library/react/cleanup-after-each';

import PlayerList from './PlayerList';

describe('<Players />', () => {
  afterEach(cleanup);

  it('should show "No Players" if players prop is not passed', () => {
    const { getByText } = render(<PlayerList />);
    getByText(/no players to list/i);
  });

  it('shold render the player lists passeds in as prop', () => {
    const players = [{id: 1, name: 'Leonel Messi'}, { id: 2, name: 'Mohammed Salah' }];
    const { getAllByTestId } = render(<PlayerList players={players} />);
    const renderedPlayers = getAllByTestId(/^player$/i).map(el => el.textContent);
    
    expect(renderedPlayers.length).toEqual(players.length);
    expect(renderedPlayers[0]).toEqual('Leonel Messi');
    expect(renderedPlayers[1]).toEqual('Mohammed Salah');
  })
});
