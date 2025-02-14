import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const SkillCoverage = () => {
  return (
    <Container className="text-center py-5">
      <Row className="align-items-center">
        <Col md={5} className="text-start">
          <h2>
            Comprehensive skills coverage built for <br />
            <strong>40+ digital roles</strong>
          </h2>
          <Button variant="primary" className="mt-3 me-2">
            Training schedules
          </Button>
          <Button variant="outline-primary" className="mt-3">
            Contact sales
          </Button>
        </Col>
        <Col md={7} className="d-flex justify-content-center">
          <div className="position-relative">
            <div className="circle bg-light p-4 rounded-circle shadow">
              <h4>Academy Solutions</h4>
            </div>
            <div className="position-absolute" style={{ top: "-20px", left: "35%" }}>
              <span className="badge bg-light text-dark">Digital Business</span>
            </div>
            <div className="position-absolute" style={{ top: "15%", right: "-10%" }}>
              <span className="badge bg-light text-dark">Data & AI</span>
            </div>
            <div className="position-absolute" style={{ bottom: "15%", right: "-10%" }}>
              <span className="badge bg-light text-dark">Cloud & DevOps</span>
            </div>
            <div className="position-absolute" style={{ bottom: "-20px", left: "35%" }}>
              <span className="badge bg-light text-dark">Software Development</span>
            </div>
            <div className="position-absolute" style={{ bottom: "15%", left: "-10%" }}>
              <span className="badge bg-light text-dark">Cybersecurity</span>
            </div>
            <div className="position-absolute" style={{ top: "15%", left: "-10%" }}>
              <span className="badge bg-light text-dark">Digital Operations</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SkillCoverage;
