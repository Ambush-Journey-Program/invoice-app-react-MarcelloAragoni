import './style.scss';

export default function SearchStatus({ onChange, statusValue }) {
  function handleChange(event) {
    onChange(event.target.value);
  }

  return (
    <>
      <label htmlFor="status__filter" className="searchbar__status--label">
        Filter by status
      </label>
      <select
        value={statusValue}
        name="status__filter"
        id="status"
        className="searchbar__status--box"
        onChange={handleChange}>
        <option value="">--</option>
        <option value="paid">Paid</option>
        <option value="pending">Pending</option>
        <option value="draft">Draft</option>
      </select>
    </>
  );
}
