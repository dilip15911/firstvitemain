import React from "react";
import { Container, Row, Col, Table, Button, Badge } from "react-bootstrap";

const ProgramCohorts = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2 className="text-center">Program Cohorts</h2>
          <h4 className="text-center text-muted">Next Cohort</h4>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <div className="border p-4 rounded shadow-sm">
            <h5>Purdue Gen AI Specialization Feb 2025 Cohort 19 <Badge bg="warning">Limited Seats Left</Badge></h5>
            <Table hover className="mt-3">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Batch Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>19 Feb, 2025</td>
                  <td>20:30 IST</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>22 Feb, 2025 - 25 May, 2025</td>
                  <td>20:30 - 23:30 IST</td>
                  <td>Weekend (Sat, Sun)</td>
                </tr>
              </tbody>
            </Table>
            <Button variant="primary" className="mt-3">Apply Now</Button>
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="d-flex justify-content-around">
          <Button variant="outline-primary">Request a Callback</Button>
          <Button variant="outline-secondary">Call us on 1800-212-7688</Button>
          <Button variant="outline-info">Live Chat</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProgramCohorts;
