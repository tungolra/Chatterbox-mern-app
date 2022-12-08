import sendRequest from "../send-request";
const BASE_URL = "/api/users";

export async function signUp(userData) {
  return sendRequest(`${BASE_URL}/register`, "POST", userData);
}
export async function logIn(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}

export async function update(userData) {
  return sendRequest(`${BASE_URL}/update`, "POST", userData);
}


export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}