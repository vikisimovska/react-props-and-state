import React, { Component } from 'react';
import ListItem from './ListItem';

class MyList extends Component {
  constructor(props) {
    super(props);
    this.names = [
      'Ernesto Garner',
      'Mitchell Rice',
      'Travis Freeman',
      'Jenny Lane',
      'Viola Baldwin',
      'Donna Alvarado',
      'Kelly Guzman',
      'Kirk Paul',
      'Edna Jordan',
      'Juana Bates'
    ];
  }
  render() {
    return this.names.map(name => <ListItem name={name} />);
  }
}

export default MyList;