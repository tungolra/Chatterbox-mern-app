import React from "react";
import { useState } from "react";
import LogInForm from "../../components/LogInForm/LogInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

// mui
import Link from "@mui/material/Button";

export default function AuthPage(props) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <>
      {showSignUp ? (
        <SignUpForm setUser={props.setUser} showSignUp={showSignUp} setShowSignUp={setShowSignUp} />
      ) : (
        <LogInForm setUser={props.setUser} showSignUp={showSignUp} setShowSignUp={setShowSignUp}/>
      )}
    </>
  );
}
