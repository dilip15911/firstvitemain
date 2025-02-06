import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AdmissionProcess = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Admission Details</h2>
      <h4 className="text-center text-muted">Application Process</h4>
      <p className="text-center text-muted">
        The application process consists of three simple steps. An offer of
        admission will be made to the selected candidates and accepted by
        the candidates by paying the admission fee.
      </p>

      <Row className="justify-content-center">
        <Col md={4} className="mb-3">
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title>STEP 1</Card.Title>
              <Card.Subtitle className="mb-2 text-primary">Submit Application</Card.Subtitle>
              <Card.Text>
                Briefly outline your education and professional experience
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-3">
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title>STEP 2</Card.Title>
              <Card.Subtitle className="mb-2 text-primary">Reserve Your Seat</Card.Subtitle>
              <Card.Text>
                Complete your payment to reserve your admission
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-3">
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title>STEP 3</Card.Title>
              <Card.Subtitle className="mb-2 text-primary">Start Learning</Card.Subtitle>
              <Card.Text>
                Selected candidates can begin the program within 1-2 weeks
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="text-center mt-4">
        <Button variant="primary" size="lg">Apply Now</Button>
      </div>
    </Container>
  );
};

export default AdmissionProcess;
