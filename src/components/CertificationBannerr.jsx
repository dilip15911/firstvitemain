import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../css/style.scss";



const CertificationBanner = () => {
    return (
        <Container fluid className="certification-banner py-4">
            <Row className="align-items-center justify-content-center text-center">
                {/* Left Side: Image */}
                <Col xs={12} md={4} className="d-flex justify-content-center">
                    <img
                        src="/Images/great_place_image.png" // Replace with actual path
                        alt="Great Place to Work Certified"
                        fluid
                        className="certification-image"
                    />

                </Col>

                {/* Right Side: Text */}
                <Col xs={12} md={6}>
                    <h3 className="certification-text">
                        We are proud to be <br />
                        <span className="highlight-text">
                            Great Place to Work®-Certified™
                        </span>
                    </h3>
                </Col>
            </Row>
        </Container>
    );
}

export default CertificationBanner;

