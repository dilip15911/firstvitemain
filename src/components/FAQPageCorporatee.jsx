import React from "react";
import { Accordion, Card } from "react-bootstrap";

const FAQPageCorporate = () => {
  const faqs = [
    {
      question: "what is corporate training ?",
      answer:
      "Anyone with Corporate training is a structured learning program designed to improve employees' skills, knowledge, and performance within an organization. It helps businesses upskill their workforce, align employees with company goals, and enhance overall productivity. in their field and a passion for teaching can apply. Prior training experience is preferred but not mandatory."    },
    {
      question: "How do I why is corporate training important for enterprises ?",
      answer:
        "You can apply by filling out our Corporate training is essential for enterprises because it helps businesses stay competitive, enhances employee performance, and aligns workforce skills with organizational goals. Here’s why it’s crucial",
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

export default FAQPageCorporate;
