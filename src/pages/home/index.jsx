import { useState } from 'react';

import SearchBar from '../../components/search-bar/';
import InvoiceList from '../../components/invoice-list/';

export default function Home() {
  const [invoices, setInvoices] = useState([]);

  const handleGetInvoiceList = (invoiceResponse) => {
    setInvoices(invoiceResponse);
  };

  return (
    <>
      <SearchBar onSubmit={handleGetInvoiceList} />
      <InvoiceList invoices={invoices} />
    </>
  );
}
