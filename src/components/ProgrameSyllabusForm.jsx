import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

const ProgramSyllabusForm = () => {
  const [show, setShow] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    workExperience: "",
  });

  const handleClose = () => setShow(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Add form submission logic here
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Program Syllabus</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name*</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email*</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>Phone Number*</Form.Label>
            <div className="d-flex">
              <Form.Select
                className="me-2"
                style={{ maxWidth: "80px" }}
                name="countryCode"
                value={formData.countryCode || "IN"}
                onChange={handleChange}
              >
                <option value="IN">+91</option>
                <option value="US">+1</option>
                <option value="UK">+44</option>
                {/* Add more country codes as needed */}
              </Form.Select>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formWorkExperience">
            <Form.Label>Total Work Experience*</Form.Label>
            <Form.Select
              name="workExperience"
              value={formData.workExperience}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="0-1">0-1 years</option>
              <option value="2-5">2-5 years</option>
              <option value="6+">6+ years</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAgreement">
            <Form.Check
              type="checkbox"
              label={
                <>
                  By providing your contact details, you agree to our {" "}
                  <a href="#">Privacy Policy</a>.
                </>
              }
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Download
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ProgramSyllabusForm;
