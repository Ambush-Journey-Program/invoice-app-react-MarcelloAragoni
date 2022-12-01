import { urlParams } from '../utilities/consts';
import { getInvoices } from './invoice';

export async function handleSubmit(event) {
  event.preventDefault();
  console.log(event);
  const [clientNameEl] = event.target;

  const filterParams = [{ name: 'clientName', value: clientNameEl.value }];

  filterParams.forEach((filter) => {
    if (filter.value) {
      urlParams.set(filter.name, filter.value);
    } else {
      urlParams.delete(filter.name);
    }
  });

  await getInvoices();
}
