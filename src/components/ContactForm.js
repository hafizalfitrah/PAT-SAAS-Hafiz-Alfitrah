import React from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  return (
    <section className="contact-form my-4">
      <h2>Contact Us</h2>
      <Form>
        <Form.Group controlId="formName">
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Control as="textarea" rows={3} placeholder="Message" />
        </Form.Group>
        <Button variant="dark" type="submit">Submit</Button>
      </Form>
    </section>
  );
};

export default ContactForm;
