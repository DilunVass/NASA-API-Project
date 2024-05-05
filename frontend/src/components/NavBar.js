import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/NASA-Logo-Large.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScroll] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 60) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
    }

    return (
        
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                <Navbar.Brand href="/home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                    <Nav.Link href="/marsroverphotos" className={activeLink === 'Mars Rover Photos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('marsroverphotos')}>Mars Rover Photos</Nav.Link>
                    <Nav.Link href="/astroids" className={activeLink === 'Astroids' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Astroids')}>Astroids</Nav.Link>
                    <Nav.Link href="/picofday" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Picture of the Day')}>Picture of the Day</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/company/nasa/"><img src={navIcon1} alt="" /></a>
                        <a href="https://www.facebook.com/NASA/"><img src={navIcon2} alt="" /></a>
                        <a href="https://www.instagram.com/nasa/?hl=en"><img src={navIcon3} alt="" /></a>
                    </div>
                    <HashLink to='/signin'>
                        <button className="vvd"><span>Sign Up Now</span></button>
                    </HashLink>
                    </span>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        
    );
}

export default NavBar;
