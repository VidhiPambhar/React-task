import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Header, MovieCards } from "../../components";
import { apiConst } from "../../constants";
import useMovieList from "./useMovieList";

const MovieList = () => {
  const [movieData, setMovieData] = useState([]);
  const { responseData } = useMovieList(apiConst.movieList);

  useEffect(() => {
    responseData().then((res) => setMovieData(res));
  }, []);

  return (
    <Container>
      <Header />
      <Row>
        {movieData.length > 0 &&
          movieData.map((item, index) => (
            <MovieCards
              id={index+1}
              title={item.title}
              episode_id={item.episode_id}
              release_date={item.release_date}
              director={item.director}
            />
          ))}
      </Row>
    </Container>
  );
};

export default MovieList;
