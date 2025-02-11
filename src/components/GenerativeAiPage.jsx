import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';


const GenerativeAICourses = () => {
  return (
    <Container fluid className="py-5" style={{ backgroundColor: '#f9f9f9' }}>
      <Row className="justify-content-center text-center mb-4">
        <Col md={8}>
          {/* <p className="text-primary mb-1">Home &gt; Generative AI</p> */}
          <h1 className="display-4 fw-bold">Generative AI Courses</h1>
          <p className="lead">
            Unlock The Future Of AI With Our Top-Rated GenAI Courses
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <p className="mb-4">
            Elevate your creative capabilities with our highly acclaimed Generative AI Courses. Dive into AI-driven innovation and explore key concepts like Generative AI, prompt engineering, ChatGPT, and more. Acquire cutting-edge knowledge to gain a competitive edge and advance your career in the evolving AI landscape.
          </p>
        </Col>
      </Row>
      <Row className="align-items-center">
        {/* Left Side - Text and Partners */}
        {/* <Col md={6} className="text-center text-md-start">
          <h4 className="fw-bold">Our Program Partners:</h4>
          <Row className="justify-content-center justify-content-md-start">
            <Col xs={4} md={3} className="my-2">
              <Image src="/path-to-image/partner1.png" alt="E&ICT Academy IIT Guwahati" fluid />
            </Col>
            <Col xs={4} md={3} className="my-2">
              <Image src="/path-to-image/partner2.png" alt="IIT Kanpur" fluid />
            </Col>
            <Col xs={4} md={3} className="my-2">
              <Image src="/path-to-image/partner3.png" alt="Ministry Logo" fluid />
            </Col>
          </Row>
        </Col> */}
        
        {/* Right Side - Image */}
        {/* <Col md={6} className="text-center">
          <Image 
            src="/path-to-image/generative-ai.png" 
            alt="Generative AI Illustration" 
            fluid 
            style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }} 
          />
        </Col> */}
      </Row>
    </Container>
  );
};

export default GenerativeAICourses;
