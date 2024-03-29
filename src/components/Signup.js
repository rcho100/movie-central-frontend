import React from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { signup } from '../actions/currentUser';
import { updateSignupForm } from '../actions/signupForm';
import popcorn from '../images/popcorn.jpg';

const Signup = ({
  signupFormData, history,
}) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const newSignupInfo = {
      ...signupFormData,
      [name]: value,
    };
    updateSignupForm(newSignupInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(signupFormData, history);
  };

  return (
    <div className="form-page">
      <img className="form-popcorn" src={popcorn} alt="popcorn" />
      <Container className="form">
        <Row>
          <Col>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control className="first-input" type="text" placeholder="Username" name="name" value={signupFormData.name} onChange={handleInputChange} />
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={signupFormData.email} onChange={handleInputChange} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={signupFormData.password} onChange={handleInputChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Sign up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  signupFormData: state.signupForm,
});

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup);
