import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const LearningPath = () => {
  return (
    <Container className="mt-4">
      <Row>
        {/* Learning Path Section */}
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Learning Path</Card.Title>
              <ul className="list-group">
                <li className="list-group-item">AGS: Program Induction</li>
                <li className="list-group-item">AGS: Python Basics (Optional)</li>
                <li className="list-group-item">AGS: Essentials of Generative AI, Prompt Engineering & ChatGPT</li>
                <li className="list-group-item">AGS: Advanced Generative AI - Models and Architecture</li>
                <li className="list-group-item">AGS: Advanced Generative AI - Building LLM Applications</li>
                <li className="list-group-item">AGS: Advanced Generative AI - Image Generation Capabilities</li>
                <li className="list-group-item">AGS: Generative AI Governance</li>
                <li className="list-group-item">AGS Capstone Project</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        {/* Inquiry Form */}
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Request more information</Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="text" placeholder="+91" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formExperience">
                  <Form.Label>Total Work Experience (in years)</Form.Label>
                  <Form.Control as="select">
                    <option>0-1</option>
                    <option>2-5</option>
                    <option>6-10</option>
                    <option>10+</option>
                  </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LearningPath;
