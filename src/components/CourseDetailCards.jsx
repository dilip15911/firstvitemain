import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const CourseCard = () => {
  return (
    <Card className="rounded shadow-sm" style={{ width: "290px", background: "white", marginRight: "10px" }}>
      <a href="https://www.henryharvin.com/cyber-security-course" className="text-decoration-none text-dark">
        <Card.Body>
          <div className="d-flex align-items-center mb-2">
            <img
              className="me-3"
              src="https://d1d5cy0fmpy9m8.cloudfront.net/images/1719566072ezgif.com-resize (99).webp"
              alt="best seller pic1"
              width="56"
              height="56"
            />
            <Card.Title className="mb-0 fs-6">Cyber Security Professional Course</Card.Title>
          </div>
        </Card.Body>
      </a>
      <Card.Body>
        <p className="fw-medium text-primary" style={{ fontSize: "14px" }}>
          Cohort Starts: 10th Feb 25
        </p>
        <div className="d-flex justify-content-between">
          <span className="text-warning fw-semibold" style={{ fontSize: "12px" }}>
            <FaStar className="text-warning" /> 4.9 (1291 Ratings)
          </span>
          <span className="text-muted" style={{ fontSize: "12px" }}>7625 Learners</span>
        </div>
      </Card.Body>
      <div className="d-grid border border-primary m-2">
        <Button variant="light" className="border border-primary text-primary">
          View More
        </Button>
        <Button variant="primary" className="text-white">
          Enroll Now
        </Button>
      </div>
    </Card>
  );
};

export default CourseCard;
