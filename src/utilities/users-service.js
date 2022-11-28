import * as usersAPI from './user-api'

// functions for retrieving / dealing with user data
export async function signUp(userData) {
  const token = await usersAPI.signUp(userData);
  return token;
}
