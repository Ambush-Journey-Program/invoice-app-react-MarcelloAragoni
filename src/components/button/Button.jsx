import PropTypes from 'prop-types';
import './style.scss';

export default function Button({ type = 'button', children, variant }) {
  const variants = {
    search: 'button--search',
    delete: 'button--delete'
  };

  const buttonVariant = variants[variant];

  return (
    <button className={`button ${buttonVariant}`} type={type}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string
};
