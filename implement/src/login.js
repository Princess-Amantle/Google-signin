// src/App.js
import React, { useEffect, useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import {auth, provider} from "./firebase";
import { signInWithPopup } from "firebase/auth";
import Home from "./home";

function Login() {
  const [value, setValue] = useState('');

  const handleLogin = async () => {
    try {
     signInWithPopup(auth, provider).then((data)=>{
      setValue(data.user.email);
      localStorage.setItem("email",data.user.email)
     });
      

    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  useEffect(()=>{
    setValue(localStorage.getItem('email'))
  })

  

  return (
    <>
    {value?<Home/>:
    <Container maxWidth="sm" style={{ marginTop: "100px", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        React Login with Google
      </Typography>
      {value ? (
        <>
          <Typography variant="h6">
            Welcome, {value.displayName}
          </Typography>
          
        </>
      ) : (
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login with Google
        </Button>
      )}
    </Container>
}
    </>
  );
}

export default Login;
