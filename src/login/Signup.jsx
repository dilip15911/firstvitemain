// import React from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";



// const Signup = () => {
//   return (
//     <Container className="d-flex justify-content-center align-items-center vh-100">
//       <Row className="shadow-lg p-4 bg-white rounded" style={{ maxWidth: "800px", width: "100%" }}>
//         {/* Left Side - Form */}
//         <Col md={6} className="p-4">
//           <h2 className="mb-3">Create an account</h2>
//           <p className="text-muted">Sign up with your email</p>

//           <Form>
//             <Form.Group controlId="name" className="mb-3">
//               <Form.Label>Full Name</Form.Label>
//               <Form.Control type="text" placeholder="Enter your name" required />
//             </Form.Group>

//             <Form.Group controlId="email" className="mb-3">
//               <Form.Label>Email Address</Form.Label>
//               <Form.Control type="email" placeholder="Enter email" required />
//             </Form.Group>

//             <Form.Group controlId="password" className="mb-3">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" placeholder="Enter password" required />
//             </Form.Group>

//             <Form.Group controlId="confirmPassword" className="mb-3">
//               <Form.Label>Confirm Password</Form.Label>
//               <Form.Control type="password" placeholder="Confirm password" required />
//             </Form.Group>

//             <Button variant="primary" type="submit" className="w-100">
//               Sign Up
//             </Button>
//           </Form>

//           <hr />

//           <Button variant="light" className="w-100 my-2">
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
//               alt="Google"
//               style={{ width: "20px", marginRight: "10px" }}
//             />
//             Continue with Google
//           </Button>

//           <Button variant="light" className="w-100">
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
//               alt="LinkedIn"
//               style={{ width: "20px", marginRight: "10px" }}
//             />
//             Continue with LinkedIn
//           </Button>

//           <p className="text-center mt-3">
//             Already have an account? <a href="/login">Log in</a>
//           </p>
//         </Col>

//         {/* Right Side - Information Section */}
//         <Col md={6} className="p-4 text-white" style={{ backgroundColor: "#002147" }}>
//           <h2>Get Certified. Get Ahead.</h2>
//           <p>Join our immersive learning experience.</p>
//           <ul className="list-unstyled">
//             <li>✅ 5M+ careers advanced</li>
//             <li>✅ 1500+ Live classes every month</li>
//             <li>✅ 85% report promotion or a new job</li>
//           </ul>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Signup;


import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("User");
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userType === "Admin" && secretKey !== "AdarshT") {
      alert("Invalid Admin Secret Key");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fname, lname, email, password, userType }),
      });

      const data = await response.json();

      if (response.status === 201) {
        alert("Registration Successful");
        window.location.href = "/login"; // Redirect to login page
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="p-4 shadow" style={{ width: "400px" }}>
        <Card.Body>
          <h3 className="text-center mb-4">Register</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Register As</Form.Label>
              <div>
                <Form.Check
                  inline
                  label="User"
                  type="radio"
                  name="userType"
                  value="User"
                  checked={userType === "User"}
                  onChange={(e) => setUserType(e.target.value)}
                />
                <Form.Check
                  inline
                  label="Admin"
                  type="radio"
                  name="userType"
                  value="Admin"
                  checked={userType === "Admin"}
                  onChange={(e) => setUserType(e.target.value)}
                />
              </div>
            </Form.Group>

            {userType === "Admin" && (
              <Form.Group className="mb-3">
                <Form.Label>Secret Key</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Secret Key"
                  onChange={(e) => setSecretKey(e.target.value)}
                />
              </Form.Group>
            )}

            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                onChange={(e) => setFname(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                onChange={(e) => setLname(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid">
              <Button type="submit" variant="primary">
                Register
              </Button>
            </div>
          </Form>

          <p className="forgot-password text-center mt-3">
            Already registered? <a href="/login">Login</a>
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}

