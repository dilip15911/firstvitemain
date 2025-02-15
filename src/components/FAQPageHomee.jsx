import React from "react";
import { Accordion, Card } from "react-bootstrap";

const FAQPageHome = () => {
  const faqs = [
    {
      question: "Is FirstVITE a reliable online learning platform ?",
      answer:
      "Yes, FirstVITE is a trusted online learning platform, FirstVITE is an online education company offering a range of short-term courses and degree programs, accredited by several global organizations. Our courses follow a well-rounded curriculum designed to help learners upskill and advance their careers. FirstVITE certificates are recognized in over 100+ countries, and the course content is always aligned with industry standards."    },
    {
      question: "What is the benefit of choosing Simplilearn over other platforms? ?",
      answer:
        "Learners choose  because it offers comprehensive, industry-relevant courses designed to meet the needs of professionals across various domains. With globally recognized certifications, partnerships with top universities like Purdue, Caltech, and IITs, and expert-led live classes, we deliver only the highest-quality training to learners. Our platform also provides hands-on projects and real-world scenarios to help learners gain practical skills that accelerate career growth, and our 24/7 learner support ensures they receive guidance and assistance whenever they need it.",
    },
    {
      question: "What role does technology play in corporate training ?",
      answer:
        "You can train in various domains, E-learning platforms for self-paced learning Virtual reality (VR) & augmented reality (AR) for interactive trainingAI-driven learning platforms for personalized training experiences technology, business, marketing, design, and more. Let us know your area of expertise when applying.",
    },
    {
      question: "what are live virtual classrooms ?",
      answer:
        "Live virtual classrooms are live sessions led by expert instructors, scheduled at convenient times. Learners interact with other learners while participating in hands-on labs and projects that simulate real-life applications of the course material.",
    },
    {
      question: "what is blended learning ?",
      answer:
        "A flexible, engaging, and personalized education model, blended learning leverages games, apps, video, audio, and other digital media to offer a stress-free, more in-depth learning experience that enhances student satisfaction,Also known as personalized-learning and hybrid-learning,blended learning programs also enable learners to go at their own pace — anywhere and anytime, at their convenience"
    },
  ];

  return (
    <div className="container mt-5 mb-5" >
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <Accordion>
        {faqs.map((faq, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{faq.question}</Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQPageHome;
