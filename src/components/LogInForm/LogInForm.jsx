// react modules
import { useState } from "react";
//utilities
import * as usersService from "../../utilities/UserRequests/users-service";
// styles
import Button from "@mui/material/Button";
import { Box, Input, Link, Container } from "@mui/material";

export default function LogInForm({ setUser, showSignUp, setShowSignUp }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.logIn(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <div>
      <Container
        component="main"
        sx={{
          display: "flex",
          height: "100vh",
          width: "60vw",
          flexDirection:"column",
        }}
      >
        <h1 className="logo">chatter[box]</h1>
        <Box
          component="form"
          autoComplete="off"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", }}
        >
          <Input
            className="outlined-basic"
            variant="outlined"
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Email"
            margin="normal"
            fullWidth
            required
            autoFocus
            disableUnderline
          />

          <Input
            className="outlined-basic"
            variant="outlined"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
            margin="normal"
            fullWidth
            required
            autoFocus
            disableUnderline
          />

          <Link variant="contained" onClick={() => setShowSignUp(!showSignUp)}>
            {showSignUp
              ? "Been here before? Log In!"
              : "New around here? Sign Up!"}
          </Link>
          <Box>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              autoFocus
              sx={{ borderRadius: " 30px" }}
            >
              LOG IN
            </Button>
          </Box>
        </Box>
      </Container>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
