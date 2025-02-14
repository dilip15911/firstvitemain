import React from "react";
import { Accordion, Card } from "react-bootstrap";

const FAQPage = () => {
  const faqs = [
    {
      question: "What is corporate training?",
      answer:
        "Corporate training is the process of improving necessary job skills and knowledge of a company's employees through an organized method of instruction.",
    },
    {
      question: "Why is corporate training important for enterprises?",
      answer:
        "Corporate training helps enterprises improve employee performance, efficiency, and productivity.",
    },
    {
      question: "What sets firstvite's corporate training program apart?",
      answer:
        "firstvite offers industry-leading trainers, real-world projects, and flexible learning options.",
    },
    {
      question: "What skills are covered in firstvite's corporate training program?",
      answer:
        "The program covers a wide range of technical, managerial, and leadership skills.",
    },
    {
      question: "Is there any minimum team size requirement for firstvite's corporate training program?",
      answer:
        "There is no strict minimum team size requirement; companies of all sizes can benefit.",
    },
  ];

  return (
    <div className="container mt-5">
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

export default FAQPage;
