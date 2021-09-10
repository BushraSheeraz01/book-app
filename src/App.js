import './App.css';
// import Home from './components/Home';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Login from './components/Login';
import BookList from './components/BookList';
import Home from './components/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar variant="dark" style={{ backgroundColor: "#580837" }}>
            <Container>
              <Navbar.Brand href="/">Books</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">About</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/books">Books</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/books">
              <BookList />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

        </div>
      </Router>
    </>
  );
}

export default App;
