import { useState } from 'react';
import { sortParams } from '../../utilities/consts';
import { getInvoices } from '../../services/invoice';
import SearchInput from '../../components/search-input';

export default function Home() {
  const [searchValue, setSearchValue] = useState('');

  const urlParams = new URLSearchParams({
    ...sortParams
  });

  async function handleSubmit(event) {
    event.preventDefault();

    const filterParams = [{ name: 'clientName', value: searchValue }];

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
    <form onSubmit={handleSubmit}>
      <SearchInput onChange={setSearchValue} value={searchValue} />
    </form>
  );
}
