// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import "./SignInPage.css"; 

// const SignInPage = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     role: 'student' // Default role set to 'student'
//   });
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5078/api/Authentication/signin', formData);
//       if (response.data && response.data.RedirectUrl) {
//         navigate(response.data.RedirectUrl);
//       }
//     } catch (err) {
//       if (err.response && err.response.data) {
//         setError(err.response.data);
//       } else {
//         setError('An error occurred. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className="signin-page">
//       <h2>Sign In</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="role">Role:</label>
//           <select
//             id="role"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             required
//           >
//             <option value="student">Student</option>
//             <option value="trainee">Trainee</option>
//             <option value="admin">Admin</option>
//           </select>
//         </div>

//         {error && <p style={{ color: 'red' }}>{error}</p>}

//         <button type="submit">Sign In</button>
//       </form>
//     </div>
//   );
// };

// export default SignInPage;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./SignInPage.css";

const SignInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post("https://localhost:7256/api/Login", {
        username,
        password,
        role,
      });

      const { Token } = response.data;
      localStorage.setItem("token", Token);
      setSuccess(`Login successful! Welcome ${response.data.Username}`);
      setError("");

      if (role === "Admin") {
        window.location.href = "/admindashboard";
      } else if (role === "Student") {
        window.location.href = "/studentdashboard";
      } else if (role === "Teacher") {
        window.location.href = "/traineedashboard";
      }
    } catch (err) {
      setError(err.response?.data || "Login failed. Please try again.");
    }
  };

  const handleNewUser = () => {
    navigate("/register"); // Navigate to NewUserForm
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        <button type="submit">Sign In</button>
        <button type="button" className="new-user-button" onClick={handleNewUser}>
          New User? Register here
        </button>
      </form>
    </div>
  );
};

export default SignInPage;




