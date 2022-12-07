import PropTypes from 'prop-types';

import Button from '../button';
import './style.scss';

export default function InvoiceItem({ id, dueDate, clientName, total, status }) {
  return (
    <li className="invoice">
      <p className="invoice--id">#{id}</p>
      <p className="invoice--date">Due {dueDate}</p>
      <p className="invoice--name">{clientName}</p>
      <p className="invoice--total">R$ {total}</p>
      <form id="patchForm">
        <div className={`invoice--status--box invoice--status--box--${status}`}>
          <Button valueButton={id} type="submit" variant={status}>
            {status}
          </Button>
        </div>
      </form>
      <form id="deleteForm">
        <Button valueButton={id} type="submit" variant="delete" />
      </form>
    </li>
  );
}

InvoiceItem.propTypes = {
  id: PropTypes.string,
  dueDate: PropTypes.string,
  clientName: PropTypes.string,
  total: PropTypes.number,
  valueButton: PropTypes.string
};
