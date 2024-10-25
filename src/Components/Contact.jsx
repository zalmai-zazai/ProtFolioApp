import React, { useState } from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', 'a17ca233-9683-4f01-b8d2-68bc6cb04b43');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log('Success', res);

      console.log('Success', res.message);
      setSuccessMessage(res.message);
      setName('');
      setEmail('');
      setMessage('');
    }
  };
  return (
    <Container className="mt-5" id="contact">
      <h2>Contact Us</h2>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            type="text"
            placeholder="Jhon smith"
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="Jhon@mail.com"
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            name="message"
            as="textarea"
            rows={4}
            placeholder="Short message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        <div className="submitContainer">
          <Button className="mt-4" variant="primary" type="submit">
            Submit
          </Button>
          <p>{successMessage}</p>
        </div>
      </Form>
    </Container>
  );
}

export default Contact;
