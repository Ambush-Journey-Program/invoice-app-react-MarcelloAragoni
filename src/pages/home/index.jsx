import { useState } from 'react';

import { getInvoices, updateInvoice, deleteInvoice } from '../../services/invoice';
import SearchBar from '../../components/search-bar/';
import InvoiceList from '../../components/invoice-list/';
import Confirmation from '../../components/confirmation/Confirmation';

export default function Home() {
  const [invoices, setInvoices] = useState([]);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentInvoiceId, setCurrentInvoiceId] = useState(null);
  const [currentInvoiceStatus, setCurrentInvoiceStatus] = useState(null);

  const handleOpenUpadeteModal = (id, status) => {
    setIsUpdateModalOpen(true);
    setCurrentInvoiceId(id);
    setCurrentInvoiceStatus(status);
  };

  const handleOpenDeleteModal = (id) => {
    setIsDeleteModalOpen(true);
    setCurrentInvoiceId(id);
  };

  const handleGetInvoiceList = async (filterParams) => {
    const invoices = await getInvoices(filterParams);

    setInvoices(invoices);
  };

  const handleUpdateModalClose = () => {
    setIsUpdateModalOpen(false);
    setCurrentInvoiceId(null);
    setCurrentInvoiceStatus(null);
  };

  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false);
    setCurrentInvoiceId(null);
  };

  const handleStatusInvoiceUpdate = async () => {
    const newStatus = currentInvoiceStatus === 'pending' ? 'paid' : 'pending';

    await updateInvoice(currentInvoiceId, { status: newStatus });
    handleGetInvoiceList();
    handleUpdateModalClose();
  };

  const handleDeleteInvoice = async () => {
    await deleteInvoice(currentInvoiceId);
    handleGetInvoiceList();
    handleDeleteModalClose();
  };

  return (
    <>
      <SearchBar onSubmit={handleGetInvoiceList} />
      <InvoiceList
        invoices={invoices}
        updateInvoice={handleOpenUpadeteModal}
        deleteInvoice={handleOpenDeleteModal}
      />
      <Confirmation
        title="Alteração de Invoice"
        description="Tem certeza que deseja Alterar o status do invoice?"
        onClose={handleUpdateModalClose}
        onConfirm={handleStatusInvoiceUpdate}
        isOpen={isUpdateModalOpen}
      />
      <Confirmation
        title="Exclusão de Invoice"
        description="Tem certeza que deseja excluir o Invoice selecionado?"
        onClose={handleDeleteModalClose}
        onConfirm={handleDeleteInvoice}
        isOpen={isDeleteModalOpen}
      />
    </>
  );
}
