import axios from 'axios';
import { getDataFromStorage } from './cookies';
import { BASE_URL } from './environment';

/**
 * Get data from server
 * @param headers
 * @param baseURL
 * @param URL
 */
export function* getData(action) {
  const url = BASE_URL + action;
  const headers = {
    Authorization: getDataFromStorage().token,
  };
  const config = { headers, url };
  return yield axios
    .get(url, config)
    .then()
    .catch();
}

/**
 * Post data to server
 * @param headers
 * @param baseURL
 * @param URL
 */
export function* postData(action, body) {
  const url = BASE_URL + action;
  const headers = {
    Authorization: getDataFromStorage().token,
  };
  const config = { headers, url };
  return yield axios.post(url, body, config);
}
