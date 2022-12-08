import { handleHideConfirmationWindow } from '../../utilities/helper';
import Button from '../button';
import './style.scss';

export default function Confirmation({
  onUpdateStatus,
  onDeleteInvoice,
  idInvoice,
  statusInvoice = ''
}) {
  return (
    <>
      <div id={'patch__screen'} className="patch__screen patch__screen--disable">
        <div className="patch__screen--text">
          <h2 className="patch__screen--title">Alteração de Invoice</h2>
          <p className="patch__screen--content">
            Tem certeza que deseja Alterar o status do invoice?
          </p>
          <div className="button__container">
            <Button
              onClick={() =>
                handleHideConfirmationWindow('patch__screen', 'patch__screen--disable')
              }
              type="submit">
              Não
            </Button>
            <Button onClick={() => onUpdateStatus(idInvoice, statusInvoice)} type="submit">
              Sim
            </Button>
          </div>
        </div>
        <div className="patch__layer"></div>
      </div>

      <div id="delete__screen" className="delete__screen delete__screen--disable">
        <div className="delete__screen--text">
          <h2 className="delete__screen--title">Exclusão de Invoice</h2>
          <p className="delete__screen--content">Tem certeza que deseja excluir o invoice?</p>
          <div className="button__container">
            <Button
              onClick={() =>
                handleHideConfirmationWindow('delete__screen', 'delete__screen--disable')
              }
              type="submit">
              Não
            </Button>
            <Button onClick={() => onDeleteInvoice(idInvoice)} type="submit">
              Sim
            </Button>
          </div>
        </div>
        <div className="delete__layer"></div>
      </div>
    </>
  );
}
