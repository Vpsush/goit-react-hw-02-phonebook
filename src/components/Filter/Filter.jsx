import css from './Filter.module.css';
import React from 'react';
import { Component } from 'react';

// const Filter = ({ value, onChange }) => {
//   return (
//     <form className={css.form}>
//       <label>
//         <input
//           type="text"
//           name="filter"
//           value={value}
//           onChange={onChange}
//           required
//         />
//       </label>
//     </form>
//   );
// };
// export default Filter;

export default class Filter extends Component {
  state = {
    name: '',
    number: '',
  };

  //   handleSubmit = e => {
  //     e.preventDefault();
  //     const name = e.currentTarget.elements.name.value;
  //     const number = e.currentTarget.elements.number.value;

  //     const nameData = {
  //       name,
  //       number,
  //     };
  //   };
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
        <input
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
          required
        />
      </div>
    );
  }
}
