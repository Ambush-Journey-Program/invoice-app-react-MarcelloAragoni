import { BASE_URL } from '../utilities/consts';

export async function getInvoices(params) {
  const response = await fetch(`${BASE_URL}?${params}`);
  return await response.json();
}
