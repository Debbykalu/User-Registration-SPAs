import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './main.css';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

   fetch("/signup", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, email, password }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    if (data.success) {
      // Signup successful, redirect to login page or home page
      console.log("Signup successful");
    } else {
      // Signup failed, display error message
      setErrorMessage(data.message);
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
     // clear input fields after submission
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    // setNameError("");
    // setEmailError("");
    // setPasswordError("");
    // setConfirmPasswordError("");
    // setErrorMessage("");
  }

  function validateForm() {
    let isValid = true;
    if (name.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    } else if (!/^[a-zA-Z ]+$/.test(name)) {
      setNameError("Name should only contain letters");
      isValid = false;
    } else {
      setNameError("");
    }

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

    if (confirmPassword.trim() === "") {
      setConfirmPasswordError("Confirm password is required");
      isValid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }

    return isValid;
  }

  return (
    <div className="signup-form">
        {errorMessage && <p>{errorMessage}</p>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <span className="error">{nameError}</span>}
        </Form.Group>

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

        <Form.Group controlId="usersPassword">
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
        <Form.Group controlId="userscPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            autoComplete="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {confirmPasswordError && (<span className="error">{confirmPasswordError}</span>)}
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
