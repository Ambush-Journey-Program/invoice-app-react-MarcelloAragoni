import { useState } from 'react';

import { getInvoices, updateInvoice, deleteInvoice } from '../../services/invoice';
import SearchBar from '../../components/search-bar/';
import InvoiceList from '../../components/invoice-list/';

export default function Home() {
  const [invoices, setInvoices] = useState([]);

  const handleGetInvoiceList = async (filterParams) => {
    const invoices = await getInvoices(filterParams);

    setInvoices(invoices);
  };

  const handleStatusInvoiceUpdate = async (idCurrentInvoice, statusCurrentInvoice) => {
    const newStatus = statusCurrentInvoice === 'pending' ? 'paid' : 'pending';

    updateInvoice(idCurrentInvoice, { status: newStatus });

    handleGetInvoiceList();
  };

  const handleDeleteInvoice = async (idCurrentInvoice) => {
    deleteInvoice(idCurrentInvoice);
    handleGetInvoiceList();
  };

  return (
    <>
      <SearchBar onSubmit={handleGetInvoiceList} />
      <InvoiceList
        invoices={invoices}
        updateInvoice={handleStatusInvoiceUpdate}
        deleteInvoice={handleDeleteInvoice}
      />
    </>
  );
}
