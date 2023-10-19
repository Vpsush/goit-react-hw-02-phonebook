import React from 'react';
import css from './Form.module.css';
import { Component } from 'react';

export default class Form extends Component {
  //   state = {
  //     contacts: [],
  //     name: '',
  //   };

  handleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const tel = e.currentTarget.elements.number.value;

    const nameData = {
      name,
      tel,
    };
    this.props.handleAddContact(nameData);
    console.log(nameData);
  };

  render() {
    return (
      <div>
        <h2 className={css.title}>Phonebook</h2>
        <div className={css.container}>
          <form onSubmit={this.handleSubmit} className={css.form}>
            <label>
              <p className={css.name}>Name</p>
              <input type="text" name="name" required />
            </label>
            <label>
              <p className={css.name}>Number</p>
              <input
                type="tel"
                name="number"
                required
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
                title="xxx-xx-xx"
              />
            </label>
            <button type="submit" className={css.btn}>
              Add contact
            </button>
            {/* <label>
            <p>
              <input type="text" name="name" required />
            </p>
          </label>
          <label>
            <p>
              <input type="text" name="name" required />
            </p>
          </label> */}
          </form>
        </div>
      </div>
    );
  }
}
