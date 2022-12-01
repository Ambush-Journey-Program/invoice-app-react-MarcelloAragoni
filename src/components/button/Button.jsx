import cn from 'classnames';
import PropTypes from 'prop-types';
import './style.scss';

export default function Button({ type = 'button', children, variant }) {
  const buttonVariant = cn(
    'button',
    { 'button--search': variant === 'search' },
    { 'button--delete': variant === 'delete' }
  );

  return (
    <button className={buttonVariant} type={type}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string
};
