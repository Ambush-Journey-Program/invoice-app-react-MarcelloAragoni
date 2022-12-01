import PropTypes from 'prop-types';
import './style.scss';

export default function SearchInput({ setValue, value }) {
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <input
      onChange={handleChange}
      className="search--input"
      type="text"
      placeholder="Invoice Owner"
      value={value}
    />
  );
}

SearchInput.propTypes = {
  value: PropTypes.string
};
