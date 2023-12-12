import { useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import Header from "./HeaderDefault";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { atom, useRecoilState } from "recoil";
import 'wowjs/css/libs/animate.css';
import { WOW } from 'wowjs';
import { useEffect } from "react";
const usernameState = atom({
  key: 'usernameState',
  default: '',
});

const passwordState = atom({
  key: 'passwordState',
  default: '',
});

const validationErrorState = atom({
  key: 'validationErrorState',
  default: null,
});


const Auth = ({ authenticate }) => {

  useEffect(() => {
    document.title = 'ABC | Log In';
    const wow = new WOW();
    wow.init();
  }, []);

  const navigate = useNavigate();
  const [username, setUsername] = useRecoilState(usernameState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [validationError, setValidationError] = useRecoilState(validationErrorState);

  const onClick = () => {
    if (!username || !password) {
      setValidationError("Please enter both username and password.");
      return;
    }

    authenticate();

    navigate("/user");
  };

  const onSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <>
      <Header />
      <div style={{ width: "300px", margin: "auto", textAlign: "center", marginTop: "200px" }}>
        <h2>User Login</h2>
        {validationError && <Alert variant="danger">{validationError}</Alert>}
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <div className="p-3"></div>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div className="p-2"></div>
          <Button variant="primary" onClick={onClick} style={{ width: "100px" }}>
            Log In
          </Button>
        </Form>
        <div className="p-3"></div>
        <p>
          Not a registered user?{" "}
          <span style={{ color: "blue", cursor: "pointer" }} onClick={onSignUpClick}>
            Sign Up
          </span>
        </p>
      </div>
      <div className="p-5"></div>
      <div className="p-5"></div>
      <div className="p-5"></div>
      <Footer />
    </>
  );
};

export default Auth;
