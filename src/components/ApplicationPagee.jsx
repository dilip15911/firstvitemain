import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ApplicationPage = () => {
  return (
    <Container className="mt-5">
      <Row>
      <h2>Apply <b>Now</b></h2>
        {/* Form Section */}
        <Col md={6} className="border-end">
          <h3>Start Application</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name<span className="text-danger">*</span></Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email<span className="text-danger">*</span></Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone Number<span className="text-danger">*</span></Form.Label>
              <Row>
                <Col md={3}>
                  <Form.Select>
                    <option value="+91">IN +91</option>
                  </Form.Select>
                </Col>
                <Col md={9}>
                  <Form.Control type="tel" placeholder="Enter phone number" required />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formExperience">
              <Form.Label>Total Work Experience<span className="text-danger">*</span></Form.Label>
              <Form.Select required>
                <option value="">Select Total Work Experience</option>
                <option value="0-1">0-1 Years</option>
                <option value="1-3">1-3 Years</option>
                <option value="3-5">3-5 Years</option>
                <option value="5+">5+ Years</option>
              </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Proceed
            </Button>
          </Form>
          <p className="mt-3 text-muted text-center">
            By providing your contact details, you agree to our <a href="#">Privacy Policy</a>
          </p>
        </Col>

        {/* Program Benefits Section */}
        <Col md={6} className="pt-4">
          <h2>Program Benefits</h2>
          <ul className="list-unstyled mt-4 d-flex flex-column  gap-5" >
            <li>✅ Certificate from Purdue University Online and Simplilearn</li>
            <li>✅ Access to Purdue's Alumni Association Membership</li>
            <li>✅ 70+ hours of curriculum delivered in live online classes</li>
            <li>✅ Build Gen AI-enabled applications through hands-on projects</li>
            <li>✅ Exposure to ChatGPT, OpenAI, DALL-E 2, Hugging Face & others</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default ApplicationPage;
