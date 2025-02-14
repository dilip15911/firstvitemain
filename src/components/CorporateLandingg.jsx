import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const CorporateLanding = () => {
  return (
    <Container fluid className="bg-light py-5">
      <Row className="align-items-center">
        <Col md={6} className="text-center text-md-start px-5">
          <h2 className="fw-bold">
            <span className="text-primary">Unlock innovation and growth</span>
            <br /> through <span className="fw-bold">talent transformation</span>
          </h2>
          <p className="text-muted">
            A world-class learning experience for your employees built on
            cutting-edge digital skills, custom pathways, industry-designed
            projects, and high-touch mentoring.
          </p>
          <div>
            <Button variant="primary" className="me-2">See how it works</Button>
            <Button variant="primary">Contact sales</Button>
          </div>
        </Col>
        <Col md={6} className="text-center">
          {/* <img
            src="https://source.unsplash.com/600x400/?team,office"
            alt="Corporate Team"
            className="img-fluid rounded"
          /> */}
        </Col>
      </Row>
    </Container>
  );
};

export default CorporateLanding;
