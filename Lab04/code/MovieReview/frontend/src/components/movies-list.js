import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies([
      {
        _id: "1",
        title: "The Shawshank Redemption",
        year: 1994,
        rated: "R",
        plot: "Two imprisoned men bond over a number of years...",
        imdbRating: 9.3,
        reviews: [
          { user: "John", text: "Amazing!", rating: 5 },
          { user: "Jane", text: "Great film", rating: 5 }
        ]
      },
      {
        _id: "2",
        title: "The Godfather",
        year: 1972,
        rated: "R",
        plot: "The aging patriarch of an organized crime dynasty...",
        imdbRating: 9.2,
        reviews: [
          { user: "Bob", text: "Classic", rating: 5 }
        ]
      },
      {
        _id: "3",
        title: "The Dark Knight",
        year: 2008,
        rated: "PG-13",
        plot: "When the menace known as the Joker wreaks...",
        imdbRating: 9.0,
        reviews: [
          { user: "Alice", text: "Masterpiece", rating: 5 },
          { user: "Tom", text: "Best Batman", rating: 5 },
          { user: "Sarah", text: "Incredible", rating: 5 }
        ]
      }
    ]);
  }, []);

  return (
    <Container className="py-5">
      <h1 className="mb-5">Popular Movies</h1>
      {movies.map((movie) => (
        <Card key={movie._id} className="mb-4 shadow-sm">
          <Card.Body>
            <Row>
              <Col md={8}>
                <Link to={`/movies/${movie._id}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <h3>{movie.title}</h3>
                </Link>
                <p className="text-muted">
                  <Badge bg="info">{movie.year}</Badge>{" "}
                  <Badge bg="success">{movie.rated}</Badge>{" "}
                  <Badge bg="warning" text="dark">\u2605 {movie.imdbRating}</Badge>
                </p>
                <p>{movie.plot}</p>
              </Col>
              <Col md={4}>
                <h5>Reviews ({movie.reviews.length})</h5>
                <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                  {movie.reviews.map((rev, idx) => (
                    <div key={idx} className="mb-2 p-2 bg-light rounded">
                      <strong>{rev.user}</strong> <span className="badge bg-warning text-dark">\u2605{rev.rating}</span>
                      <p className="mb-0 small">{rev.text}</p>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}