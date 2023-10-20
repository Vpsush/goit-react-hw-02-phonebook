import React from 'react';
import css from './ContactForm.module.css';
import { Component } from 'react';
// import Filter from '../Filter/Filter';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;

    const nameData = {
      name,
      number,
    };
    this.props.handleAddContact(nameData);
    console.log(nameData);
  };
  handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <h2 className={css.title}>Phonebook</h2>
        <div className={css.container}>
          <form onSubmit={this.handleSubmit} className={css.form}>
            <label>
              <p className={css.name}>Name</p>
              <input
                type="text"
                name="name"
                onChange={this.handleInputChange}
                required
                value={this.state.name}
              />
            </label>
            <label>
              <p className={css.name}>Number</p>
              <input
                type="text"
                name="number"
                onChange={this.handleInputChange}
                required
                // pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
                // title="xxx-xx-xx"
                value={this.state.number}
              />
            </label>
            <button type="submit" className={css.btn}>
              Add contact
            </button>
          </form>
        </div>
        <h2 className={css.title}>Contacts</h2>
        <h3 className={css.title}>Find contacts by number</h3>
        {/* <Filter /> */}
      </div>
    );
  }
}
