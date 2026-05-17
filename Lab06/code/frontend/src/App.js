import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// IMPORT COMPONENT
import MoviesList from "./components/movies-list";
import Movie from "./components/movie";
import AddReview from "./components/add-review";
import Login from "./components/login";

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  return (
    <Router>
      <div className="App">
        {/* NAVBAR */}
        <Navbar bg="light" expand="lg">
          <Navbar.Brand as={Link} to="/movies">
            Movie Reviews
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/movies">
                Movies
              </Nav.Link>

              <Nav.Link>
                {user ? (
                  <span onClick={logout} style={{ cursor: "pointer" }}>
                    Logout
                  </span>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* ROUTING */}
        <Switch>
          {/* "/" → MoviesList */}
          <Route exact path="/">
            <Redirect to="/movies" />
          </Route>

          {/* "/movies" → MoviesList */}
          <Route exact path="/movies">
            <MoviesList />
          </Route>

          {/* "/movies/:id/review" */}
          <Route
            path="/movies/:id/review"
            render={(props) => <AddReview {...props} user={user} />}
          />

          {/* "/movies/:id" */}
          <Route
            path="/movies/:id"
            render={(props) => <Movie {...props} user={user} />}
          />

          {/* "/login" */}
          <Route
            path="/login"
            render={(props) => <Login {...props} login={login} history={props.history} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
