import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentDashboard.css'; // Assuming you create a CSS file for styling

const StudentDashboard = () => {
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        contact: '',
        gender: '',
        dateOfBirth: '',
        qualification: '',
        address: '',
        interestToStudy: ''
    });
    const fetchStudentDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:5078/api/Admin/Students/${localStorage.getItem("studentId")}`);
            setStudent(response.data);
            setFormData(response.data);
            setLoading(false);
        } catch (err) {
            setError('Failed to load student details.');
            setLoading(false);
        }
    };
    useEffect(() => {
        // Fetch student details when the component mounts
        
        fetchStudentDetails();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5078/api/Student/Update/${student.id}`, formData);
            setStudent(formData);
            setEditMode(false);
        } catch (err) {
            setError('Failed to update student details.');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="dashboard-container">
            <h1>Student Dashboard</h1>
            <div className="student-details">
                <h2>Your Details</h2>
                {editMode ? (
                    <form onSubmit={handleUpdate}>
                        <label>Username</label>
                        <input type="text" name="username" value={formData.username} onChange={handleChange} />

                        <label>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />

                        <label>Contact</label>
                        <input type="text" name="contact" value={formData.contact} onChange={handleChange} />

                        <label>Gender</label>
                        <input type="text" name="gender" value={formData.gender} onChange={handleChange} />

                        <label>Date of Birth</label>
                        <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />

                        <label>Qualification</label>
                        <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} />

                        <label>Address</label>
                        <input type="text" name="address" value={formData.address} onChange={handleChange} />

                        <label>Interest to Study</label>
                        <input type="text" name="interestToStudy" value={formData.interestToStudy} onChange={handleChange} />

                        <button type="submit">Update</button>
                        <button type="button" onClick={() => setEditMode(false)}>Cancel</button>
                    </form>
                ) : (
                    <>
                        <p><strong>Username:</strong> {student.username}</p>
                        <p><strong>Email:</strong> {student.email}</p>
                        <p><strong>Contact:</strong> {student.contact}</p>
                        <p><strong>Gender:</strong> {student.gender}</p>
                        <p><strong>Date of Birth:</strong> {student.dateOfBirth}</p>
                        <p><strong>Qualification:</strong> {student.qualification}</p>
                        <p><strong>Address:</strong> {student.address}</p>
                        <p><strong>Interest to Study:</strong> {student.interestToStudy}</p>

                        <button onClick={() => setEditMode(true)}>Edit Details</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default StudentDashboard;
