import './style.scss';

export default function NothingFound() {
  return (
    <div id="errorimage" className="found">
      <p className="found--image"></p>
      <p className="found--title">There is nothing here</p>
      <p className="found--info">
        Create an invoice by clicking the New Invoice button and get started
      </p>
    </div>
  );
}
