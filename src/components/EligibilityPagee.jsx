import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const EligibilityPage = () => {
  return (
    <Container className="mt-4">
      <h2>Eligibility Criteria</h2>
      <p>For admission to this Applied Generative AI Specialization program, candidates should:</p>
      <Row>
        <Col md={4}>
          <Card className="p-3 shadow-sm">
            <Card.Text>
              ✅ Be at least 18 years old and have a high school diploma or equivalent
            </Card.Text>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 shadow-sm">
            <Card.Text>
              ✅ Have basic understanding of programming concepts and mathematics
            </Card.Text>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 shadow-sm">
            <Card.Text>
              ✅ Preferably have 2+ years of professional experience, but not mandatory
            </Card.Text>
          </Card>
        </Col>
      </Row>
      {/* <h3 className="mt-4">Admission Fee & Financing</h3>
      <p>The admission fee for this program is ₹ 1,49,999 (Incl. taxes)</p>
      <h4>Financing Options</h4>
      <p>We are committed to making our programs accessible. We offer various financing options to help you.</p>
      <Button variant="primary">Apply Now</Button> */}
    </Container>
  );
};

export default EligibilityPage;
