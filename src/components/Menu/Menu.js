import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../hooks/useAuth';
import './Menu.css';

const Menu = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand className="fw-bold fs-3 text-secondary" href="/home"><img src="https://i.im.ge/2021/10/30/omK4hC.png" className="menu-icon" alt="" /> Travele BD</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="fw-bold justify-content-end">
                        <Nav.Link as={HashLink} to="/home#banner">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#gallery">Gallery</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#activity">Activity</Nav.Link>
                        <Nav.Link as={HashLink} to="/contactUs">Contact Us</Nav.Link>
                        <Nav.Link as={HashLink} to="/aboutUs">About Us</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                            <img src={user?.photoUrl} alt="" />
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menu;

/*

*/