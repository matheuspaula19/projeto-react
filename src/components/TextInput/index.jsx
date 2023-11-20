import './styles.css';
import P from 'prop-types';

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      type="search"
      className="text-input"
      onChange={handleChange}
      value={searchValue}
      placeholder="Type your search"
    ></input>
  );
};

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
