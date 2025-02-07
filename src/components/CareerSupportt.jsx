import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const CareerSupport = () => {
  return (
    <Container className="mt-5">
      <h2 className="mb-4">Career Support</h2>
      <Row>
        <Col md={4}>
          <Card className="p-3 text-white bg-primary">
            <Card.Body>
              <Card.Title>Simplilearn JobAssist Program</Card.Title>
              <Card.Text>
                Simplilearn Job Assist program is an India Specific Offering in
                partnership with IIMJobs. The Program offers extended support to
                certified learners to land their dream jobs.
              </Card.Text>
              <Button variant="light">📥 Download Brochure</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card className="mb-3">
            <Row className="g-0">
              <Col md={4}>
                <Card.Img src="https://via.placeholder.com/100" alt="Job Membership" />
              </Col>
              <Col md={8} className="d-flex align-items-center">
                <Card.Body>
                  <Card.Text>
                    <strong>IIMJobs Pro-Membership of 6 months for free</strong>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <Card className="mb-3">
            <Row className="g-0">
              <Col md={4}>
                <Card.Img src="https://via.placeholder.com/100" alt="Resume Assistance" />
              </Col>
              <Col md={8} className="d-flex align-items-center">
                <Card.Body>
                  <Card.Text>
                    <strong>Resume building assistance to create a powerful resume</strong>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <Card>
            <Row className="g-0">
              <Col md={4}>
                <Card.Img src="https://via.placeholder.com/100" alt="Spotlight" />
              </Col>
              <Col md={8} className="d-flex align-items-center">
                <Card.Body>
                  <Card.Text>
                    <strong>Spotlight on IIMJobs for highlighting your profile to recruiters</strong>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CareerSupport;
