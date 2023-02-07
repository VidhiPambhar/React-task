import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { apiConst } from "../../constants";
import useDetailsPage from "./useDetailsPage";
import "./styles.css";

const DetailsCard = () => {

  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const { responseData } = useDetailsPage(`${apiConst.movieList}/${id}`);

  useEffect(() => {
    responseData().then((res) => setDetails(res));
  }, []);

  return (
    <div className="cardDetails">
      <div className="container">
        <React.Fragment>
          <Container>
            <h2>{details.title}</h2>
            <h3>{details.director}</h3>
            <div className="date-row">
              <label className="date">{details.release_date}</label>
            </div>
            <label className="episode-id">
              <span>Episode Id:</span>
              {details.episode_id}
            </label>
            <p>{details.opening_crawl}</p>
          </Container>
        </React.Fragment>
      </div>
    </div>
  );
};

export default DetailsCard;
