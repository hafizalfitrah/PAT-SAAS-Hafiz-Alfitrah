import React from 'react';
import { Container, Row, Col, Card, Image, Form, Button } from 'react-bootstrap';
import CardComponent from './CardComponent';
import ContactForm from './ContactForm';

const MainContent = () => {
  return (
    <main>
      <Container>
      {/* Baris Pertama */}
      <Row className="my-4">
        <Col md={6}>
          <h2>Title</h2>
          <h3>Subtitle</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <Button variant="dark">Button</Button>
        </Col>
        <Col md={6}>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe 
              className="embed-responsive-item" 
              src="https://www.youtube.com/embed/VIDEO_ID" 
              allowFullScreen>
            </iframe>
          </div>
        </Col>
      </Row>
      
      {/* Baris Kedua */}
      <Row className="my-4">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://www.smktibazma.sch.id/static/media/masjid.d157934d98cee11f144c.jpg" />
            <Card.Body>
              <Card.Text>Card Content</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://www.smktibazma.sch.id/static/media/masjid.d157934d98cee11f144c.jpg" />
            <Card.Body>
              <Card.Text>Card Content</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://www.smktibazma.sch.id/static/media/masjid.d157934d98cee11f144c.jpg" />
            <Card.Body>
              <Card.Text>Card Content</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      {/* Baris Ketiga */}
      <Row className="my-4">
        <Col md={4}>
          <p>Short description of the card above</p>
        </Col>
        <Col md={4}>
          <p>Short description of the card above</p>
        </Col>
        <Col md={4}>
          <p>Short description of the card above</p>
        </Col>
      </Row>
      <Row>
        <Col md={2}>
          <Image src="https://www.smktibazma.sch.id/static/media/masjid.d157934d98cee11f144c.jpg" thumbnail />
        </Col>
        <Col md={2}>
          <p>Short description related to image 1</p>
        </Col>
        <Col md={2}>
          <Image src="https://www.smktibazma.sch.id/static/media/masjid.d157934d98cee11f144c.jpg" thumbnail />
        </Col>
        <Col md={2}>
          <p>Short description related to image 2</p>
        </Col>
        <Col md={4} rowSpan={3}>
          <Image src="https://www.smktibazma.sch.id/static/media/masjid.d157934d98cee11f144c.jpg" thumbnail />
        </Col>
      </Row>
      <Row>
        <Col md={2}>
          <Image src="https://www.smktibazma.sch.id/static/media/masjid.d157934d98cee11f144c.jpg" thumbnail />
        </Col>
        <Col md={2}>
          <p>Short description related to image 3</p>
        </Col>
        <Col md={2}>
          <Image src="https://www.smktibazma.sch.id/static/media/masjid.d157934d98cee11f144c.jpg" thumbnail />
        </Col>
        <Col md={2}>
          <p>Short description related to image 4</p>
        </Col>
      </Row>
      <Row>
        <Col md={2}>
          <Image src="https://www.smktibazma.sch.id/static/media/masjid.d157934d98cee11f144c.jpg" thumbnail />
        </Col>
        <Col md={2}>
          <p>Short description related to image 5</p>
        </Col>
        <Col md={2}>
          <Image src="https://www.smktibazma.sch.id/static/media/masjid.d157934d98cee11f144c.jpg" thumbnail />
        </Col>
        <Col md={2}>
          <p>Short description related to image 6</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={6} className="text-center">
          <Image src="circular-image.jpg" roundedCircle style={{ width: '150px', height: '150px' }} />
          <p className="mt-3">Short description related to the circular image</p>
        </Col>
        <Col md={6}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mt-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </main>
  );
};

export default MainContent;
