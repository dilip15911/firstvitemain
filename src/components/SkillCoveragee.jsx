import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../css/style.scss";


const SkillCoverage = () => {
    const sections = [
        { name: "Digital Business", color: "#6cc24a" },
        { name: "Data & AI", color: "#2fc4b2" },
        { name: "Cloud & DevOps", color: "#32a9e0" },
        { name: "Software Development", color: "#2e78d6" },
        { name: "Cybersecurity", color: "#2452a6" },
        { name: "Digital Operations", color: "#1e3a75" }
    ];
    return (
        <Container className="text-center py-5 d-flex">
            <Row className="">
                <Col md={5} className="text-center container d-flex flex-column justify-content-center">
                    <h2>
                        Comprehensive skills coverage built for <br />
                        <strong>10+ digital roles</strong>
                    </h2>
                    <Button variant="primary" className="mt-3 me-2">
                        Training schedules
                    </Button>
                    <Button variant="outline-primary" className="mt-3">
                        Contact sales
                    </Button>
                </Col>

                <Col className="container d-flex justify-content-center align-items-center">
                    <div className="circle-container position-relative">
                        <div className="center-circle">Solutions for you</div>
                        {sections.map((section, index) => (
                            <div
                                key={index}
                                className={`section section-${index}`}
                                style={{ backgroundColor: section.color }}
                            >
                                {section.name}
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SkillCoverage;
