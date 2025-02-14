import React from "react";
import { Container, Row, Col, Accordion, Button } from "react-bootstrap";

const WorkForceTraining = () => {
  return (
    <Container className="text-center mt-5">
      <h2>Your first step to building a digital-ready workforce begins here</h2>
      
      <Row className="mt-4">
        <Col md={6}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Identify</Accordion.Header>
              <Accordion.Body>
                Details about identifying the right training needs.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Deploy</Accordion.Header>
              <Accordion.Body>
                Information on how to deploy training programs effectively.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Measure</Accordion.Header>
              <Accordion.Body>
                Methods to measure the impact of training programs.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>

        {/* <Col md={6} className="d-flex justify-content-center">
          <div className="position-relative">
            <img src="https://via.placeholder.com/400x250" alt="Video Thumbnail" className="img-fluid rounded" />
            <Button variant="light" className="position-absolute top-50 start-50 translate-middle rounded-circle">
              ▶
            </Button>
          </div>
        </Col> */}
      </Row>
      
      <Button variant="primary" className="mt-4">Contact Sales</Button>
    </Container>
  );
};

export default WorkForceTraining;
