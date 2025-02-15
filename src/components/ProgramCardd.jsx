"use client";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'; // Ensure correct import
import { FaCheckCircle, FaRegCalendarAlt } from 'react-icons/fa';

const ProgramCard = () => {
  return (
    <div className="d-flex justify-content-center mt-4">
      <Card style={{ width: '20rem', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
        <Card.Img
          variant="top"
          src="/images/plain image-programe-card-harizontal.jpg" // Ensure correct path to actual image
          alt="Course Banner"
          style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
        />
        <Card.Body>
          <div className="d-flex align-items-center mb-2 my-200" >
            {/* <img
              src="/images/project management institute images.png" // Ensure correct path to actual logo
              alt="Logo"
              className="me-2 rounded-circle"
              width="20"
              height="10"
            /> */}

            <div className="position-absolute" style={{
              top: "10em",
            }}>
              <span className="fw-transparent" style={{ fontSize: "1.2em", color: 'white', fontWeight: 'bold' }} >Project Management Institute</span>
            </div>
          </div>
          <Card.Title className="fw-transparent">PMP® Certification Training</Card.Title>
          <Card.Text className="text-muted mb-2" style={{ display: "flex" }} >
            <FaCheckCircle className="text-success me-2" style={{fontSize:'23px'}}/> 35 contact hours </Card.Text>
          <Card.Text className="text-muted mb-2" style={{ display: "flex" }}>
            <FaCheckCircle className="text-success me-2" style={{fontSize:'23px'}}/>  20 industry-based scenarios </Card.Text>
          <Card.Text className="text-muted mb-2" style={{ display: "flex" }}>
            <FaCheckCircle className="text-success me-2" style={{fontSize:'23px'}}/> 8 industry case studies </Card.Text>
          <Card.Text className="text-muted" style={{ display: "flex" }} >
            <FaRegCalendarAlt className="me-2" style={{fontSize:'23px'}}/> 4 weeks </Card.Text>
          <Card.Text className="text-muted mb-2 color[#2125298F]"> Batch Starts: <span className="text-primary color[#2125298F]">1st Feb '25</span>
            <Card.Text className="text-muted mb-2 color[#2125298F]" > Course Fee: <span className="text-primary" >Rs 20000</span>
            </Card.Text>

          </Card.Text>
          <a href="#" className="text-primary fw-light">Know More</a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProgramCard;
