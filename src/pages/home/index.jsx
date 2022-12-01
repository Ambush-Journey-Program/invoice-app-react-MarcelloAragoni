import { useState } from 'react';
import { handleSubmit } from '../../services/submit';
import SearchInput from '../../components/search-input';

export default function Home() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      <SearchInput setValue={setSearchValue} value={searchValue} />
    </form>
  );
}
