// import { nanoid } from 'nanoid';

import { Component } from 'react';
import Form from './components/Form/Form';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleAddContact = nameData => {
    console.log(nameData);
  };
  render() {
    return (
      <div>
        <Form handleAddData={this.handleAddContact} />
      </div>
    );
  }
}
