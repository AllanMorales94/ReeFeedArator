// API modules are where the code lives to communicate
// with the server via AJAX
import sendRequest from './send-request';
const BASE_URL = '/api/items';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function create(groceryItem) {
  return sendRequest(`${BASE_URL}/new`, 'POST', groceryItem);
}
// Won't be used in SEI CAFE, but demonstrates
// what you might need if you have a, for example,
// a MovieDetailPage component
export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function deleteItem(id) {
  return sendRequest(`${BASE_URL}/deleteitem`, 'DELETE', id);
}

export function updateItem(id, updatedItem) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', updatedItem);
}