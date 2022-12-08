import { useState } from 'react';

import { handleHideConfirmationWindow } from '../../utilities/helper';
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

    handleHideConfirmationWindow('patch__screen', 'patch__screen--disable');
  };

  const handleDeleteInvoice = async (idCurrentInvoice) => {
    deleteInvoice(idCurrentInvoice);
    handleGetInvoiceList();

    handleHideConfirmationWindow('delete__screen', 'delete__screen--disable');
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
