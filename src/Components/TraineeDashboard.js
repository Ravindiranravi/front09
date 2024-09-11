import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TraineeDashboard.css';

const TraineeDashboard = () => {
    const [trainee, setTrainee] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        contact: '',
        trainingProgram: ''
    });
    const fetchTraineeDetails = async () => {
        const username = localStorage.getItem("username"); // Assuming username is stored in localStorage
        if (!username) {
            setError('Username not found.');
            setLoading(false);
            return;
        }

        try {
            const response = await axios.get(`http://localhost:5078/api/Trainee/Details/${username}`);
            console.log(response)
            setTrainee(response.data);
            setFormData(response.data); // Populate form fields with existing trainee data
            setLoading(false);
        } catch (err) {
            setError('Failed to load trainee details.');
            setLoading(false);
        }
    };
    useEffect(() => {
        // Fetch trainee details based on the username stored in localStorage
        
        fetchTraineeDetails();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const username = localStorage.getItem("username");

        try {
            await axios.put(`http://localhost:5078/api/Admin/Trainees/${username}`, formData);
            setTrainee(formData); // Update the displayed trainee details with the new form data
            setEditMode(false);
        } catch (err) {
            setError('Failed to update trainee details.');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="dashboard-container">
            <h1>Trainee Dashboard</h1>
            <div className="trainee-details">
                <h2>Your Details</h2>
                {editMode ? (
                    <form onSubmit={handleUpdate}>
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />

                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label>Contact</label>
                        <input
                            type="text"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            required
                        />

                        <label>Training Program</label>
                        <input
                            type="text"
                            name="trainingProgram"
                            value={formData.trainingProgram}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit">Update</button>
                        <button type="button" onClick={() => setEditMode(false)}>Cancel</button>
                    </form>
                ) : (
                    <>
                        <p><strong>Username:</strong> {trainee.username}</p>
                        <p><strong>Email:</strong> {trainee.email}</p>
                        <p><strong>Contact:</strong> {trainee.contact}</p>
                        <p><strong>Training Program:</strong> {trainee.trainingProgram}</p>

                        <button onClick={() => setEditMode(true)}>Edit Details</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default TraineeDashboard;
