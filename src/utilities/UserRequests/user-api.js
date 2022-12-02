import sendRequest from "../send-request";
const BASE_URL = "/api/users";

// Calls for users data
export async function signUp(userData) {
  return sendRequest(`${BASE_URL}/register`, "POST", userData);
}
export async function logIn(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}
export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

// Calls for chats data





// Calls for messages data