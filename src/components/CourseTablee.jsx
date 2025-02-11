import React from "react";
import { Table, Container } from "react-bootstrap";

const courses = [
  {
    name: "Generative AI for Business Transformation",
    cohort: "12 Feb, 2025",
    duration: "16 weeks",
    fees: "₹ 1,20,000",
  },
  {
    name: "Professional Certificate Course in Generative AI and Machine Learning",
    cohort: "17 Feb, 2025",
    duration: "11 months",
    fees: "₹ 1,53,400",
  },
  {
    name: "Professional Certificate Program in Data Analytics and Generative AI",
    cohort: "17 Feb, 2025",
    duration: "11 months",
    fees: "₹ 1,19,900",
  },
  {
    name: "Applied Generative AI Specialization",
    cohort: "19 Feb, 2025",
    duration: "16 weeks",
    fees: "₹ 1,49,999",
  },
];

const CourseTable = () => {
  return (
    <Container className="mt-5">
      <h2>Our Generative AI Courses Duration And Fees</h2>
      <p>Generative AI Courses typically range from a few weeks to several months, with fees varying based on program and institution.</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Program Name</th>
            <th>Duration</th>
            <th>Fees</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>
                <strong>{course.name}</strong>
                <br />
                <small>Cohort Starts: {course.cohort}</small>
              </td>
              <td>{course.duration}</td>
              <td>{course.fees}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CourseTable;
