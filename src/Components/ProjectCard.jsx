import React from 'react';
import { Card } from 'react-bootstrap';

function ProjectCard({ name, link, description, avtar }) {
  return (
    <Card className="card" style={{ width: '12rem', height: '20rem' }}>
      <Card.body>
        <img src={avtar} className="card-img-top" alt="..." />
        <div className="card-body">
          <Card.Title className="card-title">{name}</Card.Title>
          <Card.Text className="card-text">{description}</Card.Text>
          <a href={link} className="btn btn-primary">
            Go to App
          </a>
        </div>
      </Card.body>
    </Card>
  );
}

export default ProjectCard;
