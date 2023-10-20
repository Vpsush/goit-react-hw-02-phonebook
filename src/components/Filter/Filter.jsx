import css from './Filter.module.css';
import React from 'react';
// import { Component } from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <form className={css.form}>
      <label>
        <input
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
          required
        />
      </label>
    </form>
  );
};
export default Filter;
