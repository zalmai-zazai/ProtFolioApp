import React from 'react';
import HeaderSection from './HeaderSection';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <div>
      <HeaderSection />

      <Container className="mt-5">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h2>Contact Us</h2>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter your message"
                />
              </Form.Group>

              <Button className="mt-4" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
