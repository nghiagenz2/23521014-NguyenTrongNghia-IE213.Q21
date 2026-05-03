import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import moment from "moment";
import MovieDataService from "../services/movies";

const Movie = (props) => {
  const [movie, setMovie] = useState({
    id: null,
    title: "",
    rated: "",
    reviews: [],
  });

  const getMovie = (id) => {
    MovieDataService.get(id)
      .then((response) => {
        setMovie(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteReview = (reviewId, userId) => {
    MovieDataService.deleteReview(reviewId, userId)
      .then(() => {
        getMovie(props.match.params.id);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getMovie(props.match.params.id);
  }, [props.match.params.id]);

  return (
    <div>
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <Image src={movie.poster + "/100px250"} fluid />
          </Col>

          <Col md={8}>
            <Card className="mb-4">
              <Card.Header as="h5">{movie.title}</Card.Header>
              <Card.Body>
                <Card.Text>{movie.plot}</Card.Text>
                {props.user && (
                  <Link to={"/movies/" + props.match.params.id + "/review"}>
                    Add Review
                  </Link>
                )}
              </Card.Body>
            </Card>

            <h2>Reviews</h2>
            <br />
            {movie.reviews && movie.reviews.length > 0 ? (
              movie.reviews.map((review, index) => (
                <Card key={index} className="mb-3 border-0">
                  <Card.Body className="px-0 py-2">
                    <h5>
                      {review.name} reviewed on {moment(review.date).format("Do MMMM YYYY")}
                    </h5>
                    <p>{review.review}</p>
                    {props.user && props.user.id === review.user_id && (
                      <Row>
                        <Col>
                          <Link
                            to={{
                              pathname: "/movies/" + props.match.params.id + "/review",
                              state: { currentReview: review },
                            }}
                          >
                            Edit
                          </Link>
                        </Col>
                        <Col>
                          <Button
                            variant="link"
                            onClick={() => deleteReview(review._id, props.user.id)}
                          >
                            Delete
                          </Button>
                        </Col>
                      </Row>
                    )}
                  </Card.Body>
                </Card>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Movie;