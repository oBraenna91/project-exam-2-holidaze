import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { getLocalStorageItem, removeLocalStorageItem } from '../../storage';
import Logo from '../logo';
import UserIcon from '../user-icon';
import { Link } from 'react-router-dom';

function Header() {

    const handleLogout = () => {
        removeLocalStorageItem('token');
        removeLocalStorageItem('user');
        window.location.href = '/logout';
    }


    const isLoggedIn = !!localStorage.getItem('token') || false;
    const userInfo = getLocalStorageItem('user');
    const isVenueManager = userInfo?.venueManager || false;

    const handleProfileClick = () => {
      if (!isLoggedIn) {
          // User is not logged in, show alert and redirect to /login
          alert('You are not logged in');
          window.location.href= '/login';
      }
    }

  return (
    <Navbar expand="lg" className="bg-body-tertiary mx-0">
      <Container className="bg-primary nav-container d-flex py-1 px-0 mx-0">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-dark" />
        <Navbar.Brand className="col-6 mx-0" href="/">
            <Logo />
        </Navbar.Brand>
        <Navbar.Brand className="col-1">
            <Link to={`/profile`} onClick={handleProfileClick}>
                <UserIcon />
            </Link>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="text-white">Venues</Nav.Link>
            <Nav.Link href="/profile" className="text-white">Profile</Nav.Link>
            {isVenueManager && (
                <Nav.Link href="/admin" className="text-white">
                    Admin
                </Nav.Link>
            )}
            <Nav.Link href="/contact" className="text-white">Contact</Nav.Link>
            <Nav.Link href="/about" className="text-white">About</Nav.Link>
            {isLoggedIn ? (
                <Nav.Link onClick={handleLogout} className="text-white">Log out</Nav.Link>
            ) : (
                <Nav.Link href="/login" className="text-white">Login/Register</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;