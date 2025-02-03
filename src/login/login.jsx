// 'use client'

// import React from 'react';
// import { useState } from 'react';
// import { Form, Button, Container } from 'react-bootstrap';
// // import './styles/style.css'; // Path to your CSS file

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('login details:', { email, password });
//   };

//   return (
//     <Container className="mt-5" style={{ maxWidth: '400px' }}>
//       <h2>login</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter Email Id"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword" className="mt-3">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="Password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit" className="mt-3">
//           submit
//         </Button>
//       </Form>
//     </Container>
//   );
// }

// export default Login;





// 'use client'

// import React, { useState } from 'react';
// import { Form, Button, Container, Alert } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setError(""); // Clear previous errors

//     try {
//       const response = await fetch("http://localhost:5000/login-user", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       console.log("Login response:", data);

//       if (data.status === "ok") {
//         alert("Login successful!");
//         localStorage.setItem("token", data.data);
//         localStorage.setItem("userType", data.userType);
//         localStorage.setItem("loggedIn", "true");

//         // Redirect based on user type
//         if (data.userType === "Admin") {
//           navigate("/admin-dashboard");
//         } else {
//           navigate("/userDetails");
//         }
//       } else {
//         setError("Invalid email or password. Please try again.");
//       }
//     } catch (err) {
//       console.error("Login error:", err);
//       setError("Something went wrong. Please try again later.");
//     }
//   };

//   return (
//     <Container className="mt-5" style={{ maxWidth: '400px' }}>
//       <h2 className="text-center">Login</h2>

//       {error && <Alert variant="danger">{error}</Alert>}

//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formBasicEmail" className="mb-3">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter Email Id"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword" className="mb-3">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </Form.Group>

//         <Form.Group controlId="formBasicCheckbox" className="mb-3">
//           <Form.Check type="checkbox" label="Remember me" />
//         </Form.Group>

//         <Button variant="primary" type="submit" className="w-100">
//           Login
//         </Button>
//       </Form>

//       <p className="mt-3 text-center">
//         Don't have an account? <a href="/register">Register</a>
//       </p>
//     </Container>
//   );
// };

// export default Login;


// 'use client';

// import React, { useState } from 'react';
// import { Form, Button, Container, Alert } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setError(""); // Clear previous errors

//     try {
//       const response = await fetch("http://localhost:5000/login-user", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       console.log("Login response:", data);

//       if (data.status === "ok") {
//         alert("Login successful!");
//         localStorage.setItem("token", data.data);
//         localStorage.setItem("userType", data.userType);
//         localStorage.setItem("loggedIn", "true");

//         // Redirect based on user type
//         if (data.userType === "Admin") {
//           navigate("/admin-dashboard");
//         } else {
//           navigate("/userDetails");
//         }
//       } else {
//         setError(data.message || "Invalid email or password. Please try again.");
//       }
//     } catch (err) {
//       console.error("Login error:", err);
//       setError("Something went wrong. Please try again later.");
//     }
//   };

//   return (
//     <Container className="mt-5" style={{ maxWidth: '400px' }}>
//       <h2 className="text-center">Login</h2>

//       {error && <Alert variant="danger">{error}</Alert>}

//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formBasicEmail" className="mb-3">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter Email Id"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword" className="mb-3">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </Form.Group>

//         <Form.Group controlId="formBasicCheckbox" className="mb-3">
//           <Form.Check type="checkbox" label="Remember me" />
//         </Form.Group>

//         <Button variant="primary" type="submit" className="w-100">
//           Login
//         </Button>
//       </Form>

//       <p className="mt-3 text-center">
//         Don't have an account? <Button variant="link" onClick={() => navigate("/register")}>Register</Button>
//       </p>
//     </Container>
//   );
// };

// export default Login;




'use client';

import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await fetch("http://localhost:3000/login-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Login response:", data);

      if (data.status === "ok") {
        alert("Login successful!");
        localStorage.setItem("token", data.data);
        localStorage.setItem("userType", data.userType);
        localStorage.setItem("loggedIn", "true");

        // Redirect based on user type
        if (data.userType) {
          if (data.userType === "Admin") {
            navigate("/admin-dashboard");
          } else {
            navigate("/userDetails");
          }
        } else {
          setError("Invalid user type. Please contact support.");
        }
      } else {
        setError(data.message || "Invalid email or password. Please try again.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="text-center">Login</h2>

      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox" className="mb-3">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
      </Form>

      <p className="mt-3 text-center">
        Don't have an account?{' '}
        <Button variant="link" onClick={() => navigate("/register")}>
          Register
        </Button>
      </p>
    </Container>
  );
};

export default Login;
