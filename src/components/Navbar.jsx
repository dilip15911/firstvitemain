"use client"
import React from 'react'; // Import React
import Button from 'react-bootstrap/Button'; // Bootstrap Button component
import Container from 'react-bootstrap/Container'; // Bootstrap Container component
import Form from 'react-bootstrap/Form'; // Bootstrap Form component
import Nav from 'react-bootstrap/Nav'; // Bootstrap Nav component
import Navbar from 'react-bootstrap/Navbar'; // Bootstrap Navbar component
import NavDropdown from 'react-bootstrap/NavDropdown'; // Bootstrap NavDropdown component
import { FaSearch } from "react-icons/fa";

// Correct component definition
const CustomNavbarWrapper = () => {
    return (

        <Navbar expand="lg" className="bg-body-tertiary p-0">
            <Container fluid>
                <Navbar.Brand className='mx-2' href="#">
                    <span style={{ color: '#F47C26', fontWeight: 'bolder', fontSize: '1.5em' }}>First</span>
                    <span style={{ color: '#1E90FF', fontWeight: 'bolder', fontSize: '1.5em' }}>VITE</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 justify-content-center w-100"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>

                        <NavDropdown title="All courses" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Generative AI</NavDropdown.Item>
                            <NavDropdown.Item href="#action4"> Data Science & Business Analytics </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Project Management </NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Cyber Security</NavDropdown.Item>
                            <NavDropdown.Item href="#action4"> Agile and Scrum </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Digital Marketing </NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Cloud Computing & DevOps</NavDropdown.Item>
                            <NavDropdown.Item href="#action4"> Business and Leadership </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Software Development </NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Product and Design</NavDropdown.Item>
                            <NavDropdown.Item href="#action4"> IT Service and Architecture</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Quality Management/ </NavDropdown.Item>
                        </NavDropdown>
                        {/* <NavDropdown.Divider /> */}
                        {/* <Nav.Link href="#" disabled>  Link </Nav.Link> */}
                        <Nav.Link href="#Corporate Training">Corporate Training</Nav.Link>

                        <NavDropdown title="For Business" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Work with Us</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Become a Partner</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Become a Trainer</NavDropdown.Item>
                        </NavDropdown>


                        <NavDropdown title="More" id="basic-nav-dropdown">
                            {/* <NavDropdown.Item href="#Corporate Trainning/3.1">Corporate Trainning</NavDropdown.Item> */}
                            <NavDropdown.Item href="#Resume Help/3.1">Resume Help</NavDropdown.Item>
                            <NavDropdown.Item href="#Alumuni Help/3.2">Alumuni </NavDropdown.Item>
                            <NavDropdown.Item href="#Reviews Help/3.3">Reviews </NavDropdown.Item>
                            <NavDropdown.Item href="#Resourses Help/3.4">Resourses </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#Blog">Blog</Nav.Link>

                    </Nav>
                    <Form className="d-flex" style={{ maxWidth: "230px", width: "800%" }}>
                        <div className="input-group">
                            <Form.Control
                                type="search"
                                placeholder="Type to search..."
                                className="rounded-start-pill px-4"
                                style={{
                                    borderRight: "none",
                                    boxShadow: "none",
                                }}
                                aria-label="Search"
                            />
                            <Button
                                variant="link"
                                className="text-dark"
                                // aria-label="Toggle Search"
                                style={{
                                    borderTopLeftRadius: "0",
                                    borderBottomLeftRadius: "0",
                                    backgroundColor: "#0D6EFD",
                                    color: "0D6EFD",
                                }}
                            >
                                <FaSearch size={20} />
                            </Button>
                        </div>
                    </Form>

                    <Button variant="primary" className='mx-2'>Login</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbarWrapper; // Export the component correctly
