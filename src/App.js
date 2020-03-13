import React, { Component } from 'react';
import PlayerList from './components/players/PlayerList';

import './App.css';

class App extends Component {
  state = {
    greetings: 'Hello World',
    players: [{id: 1, name: 'Leonel Messi'}, { id: 2, name: 'Mohammed Salah' }],
  }
  render() {
    return (
      <div className="App">
        <h2>{this.state.greetings}</h2>
        <button onClick={this.greatTeam}>Greet</button>
        <PlayerList players={this.state.players} />
      </div>
    );
  }

  greatTeam = () => {
    this.setState({ greetings: 'Hello developers' });
  }
}

export default App;
