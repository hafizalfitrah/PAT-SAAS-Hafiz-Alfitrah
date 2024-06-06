import React from 'react';
import { Card } from 'react-bootstrap';

const CardComponent = () => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src="image.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Card description goes here.</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
