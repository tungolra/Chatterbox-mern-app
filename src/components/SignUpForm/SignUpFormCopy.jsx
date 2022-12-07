import React, { Component, useEffect, useState } from "react";
import { signUp } from "../../utilities/UserRequests/users-service";
// mui below
import {
  TextField,
  Avatar,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  LockOutlinedIcon,
  Typography,
  Container,
  Button,
} from "@mui/material";

export default function SignUpFormCopy({ setUser }) {
  const formProperties = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };
  const [formData, setFormData] = useState([formProperties]);
  
  const handleChange = (e) => {
    setFormData({
      firstname: e.target.name,
      lastname: e.target.name,
      email: e.target.email,
      password: e.target.password,
      confirm: e.target.confirm,
      error: "",
    });
  };
  console.log("formData: ", formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = { ...formData };
      delete formData.error;
      delete formData.confirm;

      const user = await signUp(formData);
      setUser(user);
    } catch (error) {
      setFormData({ error: "Sign Up Failed - Try Again" });
    }
  };
  const disable = formData.password !== formData.confirm;
  console.log(disable);
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <CssBaseline />
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            className="outlined-basic"
            variant="outlined"
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <TextField
            className="outlined-basic"
            variant="outlined"
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
          <TextField
            className="outlined-basic"
            variant="outlined"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />

          <TextField
            className="outlined-basic"
            variant="outlined"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />

          <TextField
            className="outlined-basic"
            variant="outlined"
            type="password"
            name="confirm"
            value={formData.confirm}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
          />
          <Button variant="contained" type="submit" disabled={disable}>
            SIGN UP
          </Button>
        </form>
      </div>
      <p className="error-message">&nbsp;{formData.error}</p>
    </Container>
  );
}
