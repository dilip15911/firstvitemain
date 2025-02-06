import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FinancingOptions = () => {
  return (
    <Container className="my-5">
      <Row className="text-center mb-4">
        <Col>
          <h2>Financing Options</h2>
          <p>
            We are dedicated to making our programs accessible. We are committed to
            helping you find a way to budget for this program and offer a variety of
            financing options to make it more economical.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg p-4">
            <Card.Body>
              <h5 className="text-muted">Total Program Fee</h5>
              <h2 className="text-primary">₹ 1,49,999</h2>
              <hr />
              <p>Pay in Installments, as low as</p>
              <h4 className="text-success">₹ 6,716/month</h4>
              <p className="text-muted">
                We have partnered with the following financing companies to provide
                competitive finance options at as low as 0% interest rates with no
                hidden cost.
              </p>
              <div className="d-flex justify-content-around my-3">
                <img
                  src="https://via.placeholder.com/100x50"
                  alt="ShopSe"
                  className="img-fluid"
                />
                <img
                  src="https://via.placeholder.com/100x50"
                  alt="Propelld"
                  className="img-fluid"
                />
                <img
                  src="https://via.placeholder.com/100x50"
                  alt="Liquiloans"
                  className="img-fluid"
                />
              </div>
              <div className="text-center">
                <p className="text-muted mb-1">Admission Closes On:</p>
                <h5 className="text-danger">19<sup>th</sup> February</h5>
              </div>
              <Button variant="primary" className="w-100 mt-3">
                Apply Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5 text-center">
        <Col>
          <Button variant="outline-primary" className="mx-2">
            Request a callback
          </Button>
          <Button variant="outline-primary" className="mx-2">
            Call us on 1800-212-7688
          </Button>
          <Button variant="outline-primary" className="mx-2">
            Live Chat
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FinancingOptions;
