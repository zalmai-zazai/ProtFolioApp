import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CustomCard = ({ name, link, description, avtar }) => {
  return (
    <Card style={{ width: '15rem', height: '20rem' }}>
      <Card.Body>
        <Card.Img variant="top" src={avtar} />
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>

        <a href={link} className="btn btn-primary">
          Go to App
        </a>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
