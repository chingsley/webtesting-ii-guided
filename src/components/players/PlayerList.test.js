import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import PlayerList from './PlayerList';

describe('<Players />', () => {
  it('should show "No Players" if players prop is not passed', () => {
    const { getByText } = render(<PlayerList />);
    getByText(/no players to list/i);
  });
});
