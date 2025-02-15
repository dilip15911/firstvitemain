import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const CorporateLanding = () => {
  return (
    <Container fluid className="bg-light py-5 ">
      <Row className="">
        <Col md={12} className="text-center px-5 ">
          <h2 className="fw-bold">
            <span className="text-primary"><h1>Unlock innovation and growth</h1></span>
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
      </Row>
    </Container>
  );
};

export default CorporateLanding;
