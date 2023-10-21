// import { nanoid } from 'nanoid';

import { Component } from 'react';
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
    // name: '',
    // number: '',
  };

  handleDeleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  handleAddContact = nameData => {
    const hasDuplicate = this.state.contacts.some(
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
    this.setState({
      contacts: [...this.state.contacts, finalContact],
    });
  };

  // filterContact = e => {
  //   this.state({ filter: e.currentTarget.value });
  // };

  // getFilteredContacts = () => {
  //   const { filter, contacts } = this.state;
  //   const allLetterFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(allLetterFilter)
  //   );
  // };

  render() {
    // const filteredContacts = this.getFilteredContacts;
    // const { filterContacts, state } = this;
    return (
      <div>
        <section>
          <Form handleAddContact={this.handleAddContact} />
        </section>
        <section>
          <section>
            <Filter
            // value={state.filter}
            // onChange={filterContacts}
            />
          </section>
          {this.state.contacts.map(contact => {
            return (
              <ContactList
                id={contact.id}
                name={contact.name}
                number={contact.number}
                handleDeleteContact={this.handleDeleteContact}
                // contacts={filteredContacts}
              />
            );
          })}
        </section>
      </div>
    );
  }
}
