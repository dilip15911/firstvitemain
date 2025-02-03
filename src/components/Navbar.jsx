"use client";
import React from 'react';
import Button from 'react-bootstrap/Button'; // Bootstrap Button component
import Container from 'react-bootstrap/Container'; // Bootstrap Container component
import Form from 'react-bootstrap/Form'; // Bootstrap Form component
import Nav from 'react-bootstrap/Nav'; // Bootstrap Nav component
import Navbar from 'react-bootstrap/Navbar'; // Bootstrap Navbar component
import NavDropdown from 'react-bootstrap/NavDropdown'; // Bootstrap NavDropdown component
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CustomNavbarWrapper = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary p-0">
            <Container fluid>
                <Navbar.Brand className="mx-2" href="#">
                    <span style={{ color: '#F47C26', fontWeight: 'bolder', fontSize: '1.5em' }}>First</span>
                    <span style={{ color: '#1E90FF', fontWeight: 'bolder', fontSize: '1.5em' }}>VITE</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0 justify-content-center w-100" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <NavDropdown title="All courses" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Generative AI</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Data Science & Business Analytics</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Project Management</NavDropdown.Item>
                            {/* Add other courses */}
                        </NavDropdown>
                        <Nav.Link href="#Corporate Training">Corporate Training</Nav.Link>
                        <NavDropdown title="For Business" id="basic-nav-dropdown">
                            {/* Business related links */}
                        </NavDropdown>
                        <NavDropdown title="More" id="basic-nav-dropdown">
                            {/* Other links */}
                        </NavDropdown>
                        <Nav.Link href="#Blog">Blog</Nav.Link>
                    </Nav>
                    <Form className="d-flex" style={{ maxWidth: '230px', width: '800%' }}>
                        <div className="input-group">
                            <Form.Control
                                type="search"
                                placeholder="Type to search..."
                                className="rounded-start-pill px-4"
                                style={{ borderRight: 'none', boxShadow: 'none' }}
                                aria-label="Search"
                            />
                            <Button variant="link" className="text-dark" style={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0', backgroundColor: '#0D6EFD' }}>
                                <FaSearch size={20} />
                            </Button>
                        </div>
                    </Form>
                    <Link to="/login">
                        <Button variant="primary" className="mx-2">
                            Login
                        </Button>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbarWrapper;
