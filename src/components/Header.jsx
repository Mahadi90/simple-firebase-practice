import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
              <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Simple Firebase</Navbar.Brand>
          <Nav className="ms-auto">
            <Link className='text-white mx-3 text-decoration-none' to="/">Home</Link>
            <Link className='text-white mx-4 text-decoration-none'  to="/login">Login</Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    );
};

export default Header;