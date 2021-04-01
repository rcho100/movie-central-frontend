import React from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { login } from '../actions/currentUser';
import { updateLoginForm } from '../actions/loginForm';
import popcorn from '../images/popcorn.jpg';

const Login = ({
  loginFormData, history,
}) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const newLoginInfo = {
      ...loginFormData,
      [name]: value,
    };
    updateLoginForm(newLoginInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(loginFormData, history);
  };

  return (
    <div className="form-page">
      <img className="form-popcorn" src={popcorn} alt="popcorn" />
      <Container className="form">
        <Row>
          <Col>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={loginFormData.email} onChange={handleInputChange} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={loginFormData.password} onChange={handleInputChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loginFormData: state.loginForm,
});

export default connect(mapStateToProps, { updateLoginForm, login })(Login);
