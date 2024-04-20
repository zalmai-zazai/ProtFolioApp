import React from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="mt-5" id="contact">
      <h2>Contact Us</h2>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Jhon smith" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Jhon@mail.com" />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Short message" />
        </Form.Group>

        <Button className="mt-4" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
