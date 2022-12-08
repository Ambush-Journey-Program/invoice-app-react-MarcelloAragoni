import PropTypes from 'prop-types';

import { variants } from './constants';
import './style.scss';

export default function Button({ type = 'button', children, variant, ...buttonProps }) {
  const buttonVariant = variants[variant];

  return (
    <button className={`button ${buttonVariant ? buttonVariant : ''}`} type={type} {...buttonProps}>
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
