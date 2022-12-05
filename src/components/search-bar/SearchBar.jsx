import './style.scss';
import { useState } from 'react';
import { sortParams } from '../../utilities/consts';
import { getInvoices } from '../../services/invoice';
import SearchInput from '../../components/search-input';
import SearchStatus from '../../components/search-status';
import Button from '../../components/button';

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const [searchStatus, setSearchStatus] = useState('');

  const urlParams = new URLSearchParams({
    ...sortParams
  });

  async function handleSubmit(event) {
    event.preventDefault();

    const filterParams = [
      { name: 'clientName', value: searchValue },

      { name: 'status', value: searchStatus }
    ];

    filterParams.forEach((filter) => {
      if (filter.value) {
        urlParams.set(filter.name, filter.value);
      } else {
        urlParams.delete(filter.name);
      }
    });

    await getInvoices(urlParams);
  }

  return (
    <nav className="searchbar">
      <p className="searchbar__title">
        Invoices
        <span className="searchbar__title--count">There are 7 total invoices</span>
      </p>
      <form id="searchbar__form" onSubmit={handleSubmit}>
        <SearchInput onChange={setSearchValue} value={searchValue} />
        <SearchStatus onChange={setSearchStatus} statusValue={searchStatus} />
        <Button type="submit" variant="search">
          Search
        </Button>
      </form>
    </nav>
  );
}
