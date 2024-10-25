import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CustomCard = ({ index, name, link, description, avtar }) => {
  return (
    <Card
      className="myCard"
      key={index}
      style={{
        borderRadius: '90px 10px 90px 10px',
        width: '23rem',
        margin: '1.5rem',
        height: '25rem',

        padding: '20px',
        boxShadow: '1px 1px 6px 4px rgb(38, 249, 239)',
      }}
    >
      <Card.Body>
        <Card.Img variant="top" src={avtar} />
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="buttonContainer">
          <a href={link} className="btn ">
            Go to App
          </a>
          <a href={link} className="btn code">
            Source Code
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
