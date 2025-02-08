// import React, { Component, useState } from "react";
// import "../index.css";

// export default function SignUp() {
//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [userType, setUserType] = useState("");
//   const [secretKey, setSecretKey] = useState("");

//   const handleSubmit = (e) => {
//     if (userType == "Admin" && secretKey != "AdarshT") {
//       e.preventDefault();
//       alert("Invalid Admin");
//     } else {
//       e.preventDefault();

//       console.log(fname, lname, email, password);
//       fetch("http://localhost:3001/register", {
//         method: "POST",
//         crossDomain: true,
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//           "Access-Control-Allow-Origin": "*",
//         },
//         body: JSON.stringify({
//           fname,
//           email,
//           lname,
//           password,
//           userType,
//         }),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data, "userRegister");
//           if (data.status == "ok") {
//             alert("Registration Successful");
//           } else {
//             alert("Something went wrong");
//           }
//         });
//     }
//   };

//   return (
//     <div className="auth-wrapper">
//       <div className="auth-inner">
//         <form onSubmit={handleSubmit}>
//           <h3>Register</h3>
//           <div>
//             Register As
//             <input
//               type="radio"
//               name="UserType"
//               value="User"
//               onChange={(e) => setUserType(e.target.value)}
//             />
//             User
//             <input
//               type="radio"
//               name="UserType"
//               value="Admin"
//               onChange={(e) => setUserType(e.target.value)}
//             />
//             Admin
//           </div>
//           {userType == "Admin" ? (
//             <div className="mb-3">
//               <label>Secret Key</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Secret Key"
//                 onChange={(e) => setSecretKey(e.target.value)}
//               />
//             </div>
//           ) : null}

//           <div className="mb-3">
//             <label>First name</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="First name"
//               onChange={(e) => setFname(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <label>Last name</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Last name"
//               onChange={(e) => setLname(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <label>Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter email"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Enter password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <div className="d-grid">
//             <button type="submit" className="btn btn-primary">
//               Register
//             </button>
//           </div>
//           <p className="forgot-password text-right">
//             Already registered <a href="/login">Login?</a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import "../index.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "ok") {
          alert("Login Successful");
          localStorage.setItem("token", data.token); // Save token
          window.location.href = "/dashboard"; // Redirect
        } else {
          alert(data.message || "Invalid Credentials");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
      });
  };
  

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="p-4 shadow" style={{ width: "400px" }}>
        <Card.Body>
          <h3 className="text-center mb-4">Login</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
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
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
          <p className="forgot-password text-center mt-3">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}
