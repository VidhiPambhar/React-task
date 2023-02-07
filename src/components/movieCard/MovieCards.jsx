import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"

  const MovieCards = ({id, title, episode_id, director, release_date }) => {
  const navigate = useNavigate();

  const handleViewDetails = () =>{
      // axios.get("https://swapi.dev/api/films/3").then((res)=>{console.log(res.data)})
      navigate(`/details/${id}`)
    }
  return (
    <React.Fragment>
      <Col sm={4}>
        <Card className="card">
          <Card.Body>
            <Card.Title className="title">{title}</Card.Title>
            <Card.Text className="body">{episode_id}</Card.Text>
            <Card.Text className="body">{director}</Card.Text>
            <Card.Text className="date">{release_date}</Card.Text>
          <Button className="details-button" onClick={handleViewDetails} variant="primary">View More</Button>
          </Card.Body>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default MovieCards;
