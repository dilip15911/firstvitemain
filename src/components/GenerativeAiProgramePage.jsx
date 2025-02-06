import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const ProgramPage = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col md={8} className="mb-4">
          <h1 className="mb-4">Why Join this Program</h1>
          <Row>
            <Col md={6} className="mb-3">
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>Earn an Elite Certificate</Card.Title>
                  <Card.Text>
                    Joint Applied Generative AI program certificate from Purdue University Online and Simplilearn
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-3">
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>Leverage the Purdue Edge</Card.Title>
                  <Card.Text>
                    Gain access to Purdue’s alumni association membership on program completion
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-3">
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>Hands-on Learning Experience</Card.Title>
                  <Card.Text>
                    Learn to build Generative AI-enabled applications through industry-relevant hands-on projects
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-3">
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>Learn Popular GenAI Tools</Card.Title>
                  <Card.Text>
                    Gain exposure to Copilot, Langchain, Hugging Face, Azure AI Studio, OpenAI, and other tools
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <h4>Admission Closes on 19<sup>th</sup> Feb</h4>
              <div className="d-flex justify-content-between mb-3">
                <div>Days</div>
                <div>Hours</div>
                <div>Minutes</div>
                <div>Seconds</div>
              </div>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="tel" placeholder="Enter your phone number" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formInquiry">
                  <Form.Label>Inquiry For</Form.Label>
                  <div>
                    <Form.Check
                      inline
                      type="radio"
                      label="Myself"
                      name="inquiryFor"
                      id="inquiryMyself"
                      defaultChecked
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label="My Company"
                      name="inquiryFor"
                      id="inquiryCompany"
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formExperience">
                  <Form.Label>Total Work Experience (in years)</Form.Label>
                  <Form.Select required>
                    <option value="">Select</option>
                    <option value="0-1">0-1</option>
                    <option value="2-3">2-3</option>
                    <option value="4+">4+</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formConsent">
                  <Form.Check
                    type="checkbox"
                    label="By providing your contact details, you agree to our Privacy Policy"
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Talk to our advisor
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProgramPage;
