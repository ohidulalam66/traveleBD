import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Menu.css';

const Menu = () => {
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand className="fw-bold fs-3 text-secondary" href="/home"><img src="https://i.ibb.co/T48RmNk/travel-icon.png" className="menu-icon" alt="" /> Travele BD</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="fw-bold justify-content-end">
                        <Nav.Link as={HashLink} to="/home#banner">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#gallery">Gallery</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#activity">Activity</Nav.Link>
                        <Nav.Link as={HashLink} to="/contactUs">Contact Us</Nav.Link>
                        <Nav.Link as={HashLink} to="/aboutUs">About Us</Nav.Link>
                        {/* {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menu;