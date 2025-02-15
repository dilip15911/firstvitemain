import React from "react";
import { Accordion, Card } from "react-bootstrap";

const FAQPageTrainer = () => {
  const faqs = [
    {
      question: "Who can apply to become a trainer ?",
      answer:
      "Anyone with expertise in their field and a passion for teaching can apply. Prior training experience is preferred but not mandatory."    },
    {
      question: "How do I apply to become a trainer ?",
      answer:
        "You can apply by filling out our trainer application form on our website. Once submitted, our team will review your profile and get in touch with you..",
    },
    {
      question: "What subjects or courses can I train in ?",
      answer:
        "You can train in various domains, including technology, business, marketing, design, and more. Let us know your area of expertise when applying.",
    },
    {
      question: "Can I train part-time or full-time?",
      answer:
        "Yes, you can choose to train part-time or full-time based on your schedule and availability.",
    },
    {
      question: "How will I get paid as a trainer?",
      answer:
        "Trainers are compensated based on course enrollments, sessions conducted, or a fixed payment model, depending on the course structure.",
    },
    {
      question: "Is there any certification required to become a trainer?",
      answer:
      "While certifications can strengthen your application, they are not mandatory. Relevant industry experience and teaching skills are equally valuable."    },
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

export default FAQPageTrainer;
