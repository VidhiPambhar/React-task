import React from "react";
import { Container, Row } from "react-bootstrap";
import { Header, MovieCards } from "../../components";
import { dummyData } from "../../constants";
const MovieList = () => {
  const data = dummyData.results;
  return (
    <>
      <Container>
        <Header/>
        <Row>
          {data.map((item) => (
            <MovieCards
              title={item.title}
              episode_id={item.episode_id}
              release_date={item.release_date}
              director={item.director}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default MovieList;
