import { useState } from 'react';

import SearchBar from '../../components/search-bar/SearchBar';

export default function Home() {
  const [, setInvoices] = useState([]);

  const handleGetInvoiceList = (invoiceResponse) => {
    setInvoices(invoiceResponse);
  };

  return (
    <>
      <SearchBar onSubmit={handleGetInvoiceList} />
      {/* <InvoiceList invoices={invoices} /> */}
    </>
  );
}
