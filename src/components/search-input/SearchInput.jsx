import PropTypes from 'prop-types';

import './style.scss';

export default function SearchInput({ onChange, value }) {
  function handleChange(event) {
    onChange(event.target.value);
  }

  return (
    <input
      onChange={handleChange}
      className="searchbar__input"
      type="text"
      placeholder="Invoice Owner"
      value={value}
    />
  );
}

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};
