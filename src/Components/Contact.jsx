import React from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="mt-5" id="contact">
      <h2>Contact Us</h2>
      <Form action="https://api.web3forms.com/submit" method="post">
        <input
          type="hidden"
          name="access_key"
          value="a17ca233-9683-4f01-b8d2-68bc6cb04b43"
        />
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Jhon smith" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Jhon@mail.com" />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            name="message"
            as="textarea"
            rows={4}
            placeholder="Short message"
          />
        </Form.Group>

        <Button className="mt-4" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
