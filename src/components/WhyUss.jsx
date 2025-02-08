import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const features = [
  { title: "Certified & Experienced Instructors",img:"",  color: "#C3B1E1" },
  { title: "Post Training Followups", img: "membership.png", color: "#A1DAB4" },
  { title: "Tailor Made Training", img: "training.png", color: "#F8C8C4" },
  { title: "Flexible Schedule", img: "schedule.png", color: "#E6A8D7" },
  { title: "Access to the Recorded Sessions", img: "recordings.png", color: "#90EE90" },
  { title: "10 in 1 Program", img: "program.png", color: "#C4A484" },
  { title: "Masterclasses By firstVite", img: "masterclass.png", color: "#B0D9B1" },
  { title: "One-to-One Training", img: "one-to-one.png", color: "#E9967A" }
];

const WhyUs = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Why Us?</h2>
      <Row>
        {features.map((feature, index) => (
          <Col md={6} lg={3} key={index} className="mb-4">
            <Card style={{ backgroundColor: feature.color, border: 'none' }} className="text-center p-3 shadow">
              <Card.Img variant="top" src={feature.img} className="mx-auto" style={{ width: '50px' }} />
              <Card.Body>
                <Card.Title>{feature.title}</Card.Title>
                <a href=""><Button variant="light">Learn More</Button></a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WhyUs;
