import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './main.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Login successful, redirect to home page or dashboard
          console.log("Login successful");
        } else {
          // Login failed, display error message
          console.error(data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
 
  function handleSubmit(event) {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // submit the form data
      console.log("Form data submitted");
    }
    setEmail("");
    setPassword("");
    // setEmailError("");
    // setPasswordError("");
  }

  

  function validateForm() {
    let isValid = true;
    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password should be at least 8 characters long");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  }

  return (
    <div className="login-form">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <span className="error">{emailError}</span>}
        </Form.Group>

        <Form.Group controlId="userPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            autoComplete="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <span className="error">{passwordError}</span>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;