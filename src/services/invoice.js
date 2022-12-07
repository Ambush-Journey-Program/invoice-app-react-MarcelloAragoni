import { BASE_URL } from '../utilities/consts';

export async function getInvoices(params) {
  const response = await fetch(`${BASE_URL}?${params}`);
  return await response.json();
}

export async function deleteInvoice(id) {
  await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
}

export async function updateInvoice(id, requestBody) {
  await fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(requestBody)
  });
}
