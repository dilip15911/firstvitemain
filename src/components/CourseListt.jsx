import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CourseCard = ({ course }) => {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Img variant="top" src={course.image} alt={course.name} />
      <Card.Body>
        <Card.Title>{course.name}</Card.Title>
        <Card.Text>
          <strong>Duration:</strong> {course.duration} <br />
          <strong>Cohort Starts:</strong> {course.startDate}
        </Card.Text>
        <Button variant="primary">View Program</Button>
      </Card.Body>
    </Card>
  );
};

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.example.com/courses') // Replace with actual API URL
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  // Static Data as fallback
  const staticCourses = [
    {
      name: 'PMP® Certification Training',
      duration: '4 Weeks',
      startDate: '8th Feb 25',
      image: 'https://via.placeholder.com/300',
    },
    {
      name: 'Advanced Executive Program in Cybersecurity',
      duration: '6 Months',
      startDate: '12th Feb 25',
      image: 'https://via.placeholder.com/300',
    },
    {
      name: 'Caltech Post Graduate Program in AI and Machine Learning',
      duration: '11 Months',
      startDate: '19th Feb 25',
      image: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <Container>
      <h2 className="my-4">Explore Our Top Programs</h2>
      <Row>
        {loading ? (
          <Spinner animation="border" />
        ) : courses.length > 0 ? (
          courses.map((course, index) => (
            <Col md={4} key={index}>
              <CourseCard course={course} />
            </Col>
          ))
        ) : (
          staticCourses.map((course, index) => (
            <Col md={4} key={index}>
              <CourseCard course={course} />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default CourseList;
