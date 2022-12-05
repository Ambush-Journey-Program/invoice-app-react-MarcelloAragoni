import { useState } from 'react';
import { sortParams } from '../../utilities/consts';
import { getInvoices } from '../../services/invoice';
import SearchInput from '../../components/search-input';

const urlParams = new URLSearchParams({
  ...sortParams
});

export async function handleSubmit(event) {
  event.preventDefault();

  const [clientNameEl] = event.target;

  const filterParams = [{ name: 'clientName', value: clientNameEl.value }];

  filterParams.forEach((filter) => {
    if (filter.value) {
      urlParams.set(filter.name, filter.value);
    } else {
      urlParams.delete(filter.name);
    }
  });

  await getInvoices(urlParams);
}

export default function Home() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      <SearchInput onChange={setSearchValue} value={searchValue} />
    </form>
  );
}
