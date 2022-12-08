import PropTypes from 'prop-types';

import Button from '../button';
import './style.scss';

export default function Confirmation({ onConfirm, isOpen = false, onClose, title, description }) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div id={'modal__screen'} className="modal__screen">
        <div className="modal__screen--text">
          <h2 className="modal__screen--title">{title}</h2>
          <p className="modal__screen--content">{description}</p>
          <div className="button__container">
            <Button onClick={onClose}>Não</Button>
            <Button onClick={onConfirm} type="submit">
              Sim
            </Button>
          </div>
        </div>
        <div className="modal__layer"></div>
      </div>
    </>
  );
}

Confirmation.propTypes = {
  onConfirm: PropTypes.func,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string
};
