import React from 'react';
import PropTypes from 'prop-types';
import { FilterContacts } from './Styled';

export const Filter = ({ setFilter, filter }) => {
  return (
    <label htmlFor="filter">
      <p>Find contacts by name</p>
      <FilterContacts
        type="text"
        id="filter"
        value={filter}
        onChange={setFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  setFilter: PropTypes.func,
  filter: PropTypes.string,
};
