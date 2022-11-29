// in charge of sending out ajax requests to server
const BASE_URL = "api/users";

export async function signUp(userData) {
  const res = await fetch(BASE_URL, {
    // have to pass in options object to change up option for our fetch request
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Sign Up");
  }
}

export async function logIn(credentials) {
  const res = await fetch(`${BASE_URL}/login`, {
    // have to pass in options object to change up option for our fetch request
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error();
  }
}
