import PropTypes from 'prop-types';

import { variants } from './constants';
import './style.scss';

export default function Button({ type = 'button', children, variant, valueButton = '' }) {
  const buttonVariant = variants[variant];

  return (
    <button value={valueButton} className={`button ${buttonVariant}`} type={type}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  valueButton: PropTypes.string
};
