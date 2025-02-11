import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const jobRoles = [
  {
    title: "Research Scientist",
    description:
      "Conduct advanced research and innovate in Generative AI model and algorithm development.",
  },
  {
    title: "AI Product Manager",
    description:
      "Lead the development of products and applications powered by Generative AI.",
  },
  {
    title: "Ethical AI Manager",
    description: "Address ethical implications and biases in AI-generated content.",
  },
  {
    title: "ML Engineer",
    description: "Deploy Generative AI models for real-world applications.",
  },
  {
    title: "NLP Engineer",
    description:
      "Create Generative AI models for tasks such as text generation, machine translation, and text summarization.",
  },
  {
    title: "Data Scientist",
    description:
      "Prepare and refine datasets essential for training Generative AI models.",
  },
  {
    title: "Game Developer",
    description: "Utilize Generative AI to craft game elements like maps and characters.",
  },
  {
    title: "Autonomous Systems Engineer",
    description:
      "Enhance autonomous agents with Generative AI to enable more natural behaviors.",
  },
  {
    title: "AI Prompt Engineer",
    description:
      "Specialists who design and refine prompts to guide generative AI models in producing desired outputs."}
];

const JobRolesPage = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">
        Job Roles and Opportunities in Generative AI
      </h2>
      <Row>
        {jobRoles.map((role, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="fw-bold">{role.title}</Card.Title>
                <Card.Text>{role.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default JobRolesPage;
