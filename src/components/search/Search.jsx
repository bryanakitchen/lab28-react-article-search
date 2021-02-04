import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchText, onChange }) => (
  <div>
    <label htmlFor="textInput">Search Box</label>
    <input id="textInput" type="text" value={searchText} onChange={onChange} />
  </div>
);

Search.propTypes = {
  searchText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Search;
