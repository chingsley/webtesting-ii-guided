import React from 'react';

export default function Players({ players = [] }) {
  if(players.length < 1) {
    return <h2>No Players to List</h2>
  }
  return (
    <ul>
      {players.map(player => (
        <li key={player.id} data-testid="player">{player.name}</li>
      ))}
    </ul>
  );
}
