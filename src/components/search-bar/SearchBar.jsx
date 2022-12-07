import PropTypes from 'prop-types';
import { useState } from 'react';

import { getInvoices } from '../../services/invoice';
import { formatQueryParams } from '../../utilities/helper';
import SearchInput from '../../components/search-input';
import SearchStatus from '../../components/search-status';
import Button from '../../components/button';
import './style.scss';

export default function SearchBar({ onSubmit }) {
  const [searchValue, setSearchValue] = useState('');
  const [searchStatus, setSearchStatus] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const filterParams = [
      { name: 'clientName', value: searchValue },
      { name: 'status', value: searchStatus }
    ];

    const urlParams = formatQueryParams(filterParams);

    const invoices = await getInvoices(urlParams);

    onSubmit(invoices);
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

SearchBar.propType = {
  onChange: PropTypes.func
};
