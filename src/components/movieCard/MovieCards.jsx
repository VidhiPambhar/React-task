import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"
const MovieCards = ({ title, episode_id, director, release_date }) => {
  return (
    <React.Fragment>
      <Col sm={4}>
        <Card className="card">
          <Card.Body>
            <Card.Title className="title">{title}</Card.Title>
            <Card.Text>{episode_id}</Card.Text>
            <Card.Body>{director}</Card.Body>
            <Card.Subtitle>{release_date}</Card.Subtitle>
          <Button className="details-button" variant="primary">View More</Button>
          </Card.Body>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default MovieCards;
