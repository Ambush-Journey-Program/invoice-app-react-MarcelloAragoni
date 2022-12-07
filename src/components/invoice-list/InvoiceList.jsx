import PropTypes from 'prop-types';

import InvoiceItem from '../invoice-item';
import NothingFound from '../nothing-found/NothingFound';
import './style.scss';

export default function InvoiceList({ invoices, updateInvoice, deleteInvoice }) {
  console.log({ invoices });

  return (
    <>
      {invoices?.length ? (
        <ul className="invoices">
          {invoices.map((invoice) => (
            <InvoiceItem
              key={invoice.id}
              id={invoice.id}
              dueDate={invoice.paymentDue}
              clientName={invoice.clientName}
              total={invoice.total}
              status={invoice.status}
              onUpdateStatus={updateInvoice}
              onDeleteInvoice={deleteInvoice}
            />
          ))}
        </ul>
      ) : (
        <NothingFound />
      )}
    </>
  );
}

InvoiceList.propTypes = {
  invoices: PropTypes.array,
  updateInvoice: PropTypes.func,
  deleteInvoice: PropTypes.func
};
