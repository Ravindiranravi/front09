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

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignInPage.css';

const SignInPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student'); // Default role set to 'student'
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5078/api/Authentication/signin', {
                Username: username,
                Password: password,
                Role: role
            });

            const { redirectUrl } = response.data; // Assuming backend sends back the redirect URL

            if (redirectUrl) {
                localStorage.setItem("username",response.data.id)
                navigate(redirectUrl);
            } else {
                alert('Invalid username or password');
            }
        } catch (error) {
            console.error('Error during sign-in:', error);
            alert('An error occurred during sign-in.');
        }
    };

    // Navigate to the StudentNewUser form
    const handleNewUserClick = () => {
        navigate("/student-new-user" ); // Assuming the route for StudentNewUser form is '/studentnewuser'
    };

    return (
        <div className="container">
            <div className="form-wrapper">
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username or Email:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <label htmlFor="role">Login As:</label>
                    <select
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="student">Student</option>
                        <option value="trainee">Trainee</option>
                        <option value="admin">Admin</option>
                    </select>

                    <button type="submit">Submit</button>
                </form>

                {/* New User button below the form */}
                <button onClick={handleNewUserClick} className="new-user-btn">
                    New User
                </button>
            </div>
        </div>
    );
};

export default SignInPage;





