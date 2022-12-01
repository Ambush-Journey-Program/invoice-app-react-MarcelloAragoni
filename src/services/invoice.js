import { urlParams, BASE_URL } from '../utilities/consts';

export async function getInvoices() {
  const response = await fetch(`${BASE_URL}?${urlParams}`);
  return response.json();
}
