import React, { Component } from 'react';
import Form from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import { nanoid } from 'nanoid';
import Filter from 'components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleAddContact = nameData => {
    const hasDuplicate = this.state.contacts.find(
      contact => contact.name === nameData.name
    );
    if (hasDuplicate) {
      alert(`${nameData.name} is already in contacts`);
      return;
    }

    const finalContact = {
      ...nameData,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, finalContact],
    }));
  };

  handleFilterChange = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const allLetterFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(allLetterFilter)
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <section>
          <Form handleAddContact={this.handleAddContact} />
        </section>
        <section>
          <Filter
            value={this.state.filter}
            onChange={this.handleFilterChange}
          />
        </section>
        {filteredContacts.map(contact => (
          <ContactList
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            handleDeleteContact={this.handleDeleteContact}
          />
        ))}
      </div>
    );
  }
}

export default App;
