import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { getLocalStorageItem, removeLocalStorageItem } from '../../storage';
import Logo from '../logo';
import UserIcon from '../user-icon';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Header() {

    const handleLogout = () => {
        removeLocalStorageItem('token');
        removeLocalStorageItem('user');
        alert('You are now logged out!')
        window.location.href = '/';
    }


    const isLoggedIn = !!localStorage.getItem('token') || false;
    const userInfo = getLocalStorageItem('user');
    const isVenueManager = userInfo?.venueManager || false;

    const handleProfileClick = () => {
      
      if (!isLoggedIn) {
          alert('You are not logged in');
          window.location.href= '/login';
      }
    }

  return (
    <Navbar expand="md" className="bg-body-tertiary mx-0">
      <Container className="bg-primary nav-container py-1 px-0 mx-0">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-dark" />
        <Navbar.Brand className="col-6 col-md-3 mx-0" as={NavLink} to="/" aria-label="Home">
            <Logo />
        </Navbar.Brand>
        <Navbar.Brand className="col-1 d-md-none">
            <Link to={`/profile`} onClick={handleProfileClick} aria-label="Profile">
                <UserIcon />
            </Link>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" className="text-white nav-link" aria-label="Venues">Venues</Nav.Link>
            <Nav.Link as={NavLink} to={`/profile`} onClick={handleProfileClick} className="text-white nav-link" aria-label="Profile">Profile</Nav.Link>
            {isVenueManager && (
                <Nav.Link as={NavLink} to="/admin" className="text-white" aria-label="Admin">
                    Admin
                </Nav.Link>
            )}
            <Nav.Link as={NavLink} to="/contact" className="text-white" aria-label="Contact">Contact</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="text-white" aria-label="About">About</Nav.Link>
            {isLoggedIn ? (
                <Nav.Link onClick={handleLogout} className="text-white">Log out</Nav.Link>
            ) : (
                <Nav.Link as={NavLink} to="/login" className="text-white" aria-label="Login/Register">Login/Register</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;