import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Header from "./HeaderDefault";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'wowjs/css/libs/animate.css';
import { WOW } from 'wowjs';

const SignUp = () => {

  useEffect(() => {
    document.title = 'ABC | Sign Up';
    const wow = new WOW();
    wow.init();
  }, []);
  const navigate = useNavigate();
  const [signupUsername, setSignupUsername] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPhoneNumber, setSignupPhoneNumber] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const validateForm = () => {
    let errors = {};

    if (!signupUsername) {
      errors.username = "Username is required";
    }

    if (!signupEmail) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(signupEmail)) {
      errors.email = "Invalid email address";
    }

    if (!signupPhoneNumber) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(signupPhoneNumber)) {
      errors.phoneNumber = "Invalid phone number";
    }

    if (!signupPassword) {
      errors.password = "Password is required";
    } else if (signupPassword.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const onSignUpClick = () => {
    if (validateForm()) {
      navigate("/auth");
    }
  };

  return (
    <>
      <Header />
      <div style={{ width: "300px", margin: "auto", textAlign: "center", marginTop: "50px" }}>
        <h2>User Signup</h2>
        <Form>
          <Form.Group controlId="formSignupUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Choose a username"
              value={signupUsername}
              onChange={(e) => setSignupUsername(e.target.value)}
            />
            <p style={{ color: "red" }}>{validationErrors.username}</p>
          </Form.Group>

          <Form.Group controlId="formSignupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
            />
            <p style={{ color: "red" }}>{validationErrors.email}</p>
          </Form.Group>

          <Form.Group controlId="formSignupPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your phone number"
              value={signupPhoneNumber}
              onChange={(e) => setSignupPhoneNumber(e.target.value)}
            />
            <p style={{ color: "red" }}>{validationErrors.phoneNumber}</p>
          </Form.Group>

          <Form.Group controlId="formSignupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Choose a password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
            />
            <p style={{ color: "red" }}>{validationErrors.password}</p>
          </Form.Group>

          <Button variant="primary" onClick={onSignUpClick} style={{ width: "100px" }}>
            Sign Up
          </Button>
        </Form>
        <div className="p-3"></div>
        <p>
          Already a user?{" "}
          <span style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("/auth")}>
            Log In
          </span>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;



