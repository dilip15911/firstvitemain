import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";

const categories = [
  { name: "Generative AI", link: "/generative-ai" },
  { name: "AI & Machine Learning", link: "/ai-and-machine-learning" },
  { name: "Data Science & Business Analytics", link: "/data-science-business-analytics" },
  { name: "Project Management", link: "/project-management" },
  { name: "Cyber Security", link: "/cyber-security" },
  { name: "Agile and Scrum", link: "/agile-and-scrum" },
  { name: "Cloud Computing & DevOps", link: "/cloud-computing-devops" },
  { name: "Business and Leadership", link: "/business-and-leadership" },
  { name: "Software Development", link: "/software-development" },
  { name: "Product and Design", link: "/product-and-design" },
];

const Sidebar = () => {
  return (

    <div className="p-3 bg-light" style={{ width: "300px" }}>
      {/* Most Popular Button */}
      <button className="btn btn-primary w-100 mb-3">Most Popular</button>

      {/* Category List */}
      <ListGroup>
        {categories.map((category, index) => (
          <ListGroup.Item 
            key={index} 
            className="text-dark font-semibold bg-gray-100 border-0 d-flex justify-content-between align-items-center"
            style={{ background: "#f7f8f8" }}
            action 
            href={category.link}
          >
            {category.name}
            <FaAngleRight />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Sidebar;
