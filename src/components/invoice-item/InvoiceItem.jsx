import PropTypes from 'prop-types';

import Button from '../button';
import './style.scss';

export default function InvoiceItem({
  id,
  dueDate,
  clientName,
  total,
  status,
  onUpdateStatus,
  onDeleteInvoice
}) {
  return (
    <li className="invoice">
      <p className="invoice--id">#{id}</p>
      <p className="invoice--date">Due {dueDate}</p>
      <p className="invoice--name">{clientName}</p>
      <p className="invoice--total">R$ {total}</p>
      <div className={`invoice--status--box invoice--status--box--${status}`}>
        <Button variant={status} onClick={() => onUpdateStatus(id, status)}>
          {status}
        </Button>
      </div>
      <Button variant="delete" onClick={() => onDeleteInvoice(id)} />
    </li>
  );
}

InvoiceItem.propTypes = {
  id: PropTypes.string,
  dueDate: PropTypes.string,
  clientName: PropTypes.string,
  total: PropTypes.number,
  valueButton: PropTypes.string,
  onUpdateStatus: PropTypes.func,
  onDeleteInvoice: PropTypes.func
};
