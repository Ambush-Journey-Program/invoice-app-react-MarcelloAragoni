import PropTypes from 'prop-types';

import { handleShowConfirmationWindow } from '../../utilities/helper';
import Confirmation from '../confirmation/Confirmation';
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
    <>
      <li className="invoice">
        <p className="invoice--id">#{id}</p>
        <p className="invoice--date">Due {dueDate}</p>
        <p className="invoice--name">{clientName}</p>
        <p className="invoice--total">R$ {total}</p>
        <div className={`invoice--status--box invoice--status--box--${status}`}>
          <Button
            variant={status}
            onClick={() => handleShowConfirmationWindow('patch__screen', 'patch__screen--disable')}>
            {status}
          </Button>
        </div>
        <Button
          variant="delete"
          onClick={() => handleShowConfirmationWindow('delete__screen', 'delete__screen--disable')}
        />
      </li>
      <Confirmation
        onUpdateStatus={onUpdateStatus}
        onDeleteInvoice={onDeleteInvoice}
        idInvoice={id}
        statusInvoice={status}
      />
    </>
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
