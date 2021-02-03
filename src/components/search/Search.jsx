import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchText, onChange }) => (
  <div>
    <input type="text" value={searchText} onChange={onChange} />
  </div>
);

Search.prototypes = {
  searchText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Search;
