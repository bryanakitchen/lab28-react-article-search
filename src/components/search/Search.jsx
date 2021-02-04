import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchText, onChange }) => (
  <div>
    <input placeholder="Search here..." type="text" value={searchText} onChange={onChange} />
  </div>
);

Search.propTypes = {
  searchText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Search;
