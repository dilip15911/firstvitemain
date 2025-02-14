import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const CorporateTraining = () => {
  return (
    <div style={{ backgroundColor: "#4B2674", color: "white", padding: "50px 0" }}>
      <Container className="text-center">
        <h2>Corporate Training</h2>
        <p style={{ fontStyle: "italic" }}>Upskill your Organization</p>
        <p style={{ fontStyle: "italic" }}>
          With Award Winning Corporate Training Provider
        </p>
        <Button variant="light" className="my-3">DOWNLOAD BROCHURE</Button>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <Button variant="outline-light" className="d-flex align-items-center gap-2">
            <FaPhone /> +91-999066567
          </Button>
          <Button variant="outline-light" className="d-flex align-items-center gap-2">
            <FaWhatsapp /> Whatsapp Us
          </Button>
          <Button variant="outline-light" className="d-flex align-items-center gap-2">
            <FaEnvelope /> info@firstvite.com
          </Button>
        </div>
        <div
          style={{
            position: "fixed",
            right: "10px",
            bottom: "20px",
            backgroundColor: "green",
            color: "white",
            padding: "10px 15px",
            borderRadius: "30px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <FaPhone /> +91 9899 577 620
        </div>
      </Container>
    </div>
  );
};

export default CorporateTraining;
