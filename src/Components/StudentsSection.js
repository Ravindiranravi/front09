// src/components/StudentsSection.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentsSection = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    username: '',
    email: '',
    contact: '',
    gender: '',
    dateOfBirth: '',
    address: '',
    qualification: '',
    interestToStudy: '',
    dateOfJoin: ''
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('/api/student');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/student', newStudent);
      setNewStudent({
        username: '',
        email: '',
        contact: '',
        gender: '',
        dateOfBirth: '',
        address: '',
        qualification: '',
        interestToStudy: '',
        dateOfJoin: ''
      });
      fetchStudents();
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };

  const handleUpdate = async (id, updatedStudent) => {
    try {
      await axios.put(`/api/student/${id}`, updatedStudent);
      fetchStudents();
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/student/${id}`);
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <section>
      <h2>Students</h2>
      <form onSubmit={handleCreate}>
        <input type="text" name="username" value={newStudent.username} onChange={(e) => setNewStudent({ ...newStudent, username: e.target.value })} placeholder="Username" required />
        <input type="email" name="email" value={newStudent.email} onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })} placeholder="Email" required />
        <input type="text" name="contact" value={newStudent.contact} onChange={(e) => setNewStudent({ ...newStudent, contact: e.target.value })} placeholder="Contact" required />
        <input type="text" name="gender" value={newStudent.gender} onChange={(e) => setNewStudent({ ...newStudent, gender: e.target.value })} placeholder="Gender" />
        <input type="date" name="dateOfBirth" value={newStudent.dateOfBirth} onChange={(e) => setNewStudent({ ...newStudent, dateOfBirth: e.target.value })} />
        <input type="text" name="address" value={newStudent.address} onChange={(e) => setNewStudent({ ...newStudent, address: e.target.value })} placeholder="Address" />
        <input type="text" name="qualification" value={newStudent.qualification} onChange={(e) => setNewStudent({ ...newStudent, qualification: e.target.value })} placeholder="Qualification" />
        <input type="text" name="interestToStudy" value={newStudent.interestToStudy} onChange={(e) => setNewStudent({ ...newStudent, interestToStudy: e.target.value })} placeholder="Interest To Study" />
        <input type="date" name="dateOfJoin" value={newStudent.dateOfJoin} onChange={(e) => setNewStudent({ ...newStudent, dateOfJoin: e.target.value })} />
        <button type="submit">Create Student</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Address</th>
            <th>Qualification</th>
            <th>Interest To Study</th>
            <th>Date of Join</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.studentId}>
              <td>{student.username}</td>
              <td>{student.email}</td>
              <td>{student.contact}</td>
              <td>{student.gender}</td>
              <td>{student.dateOfBirth}</td>
              <td>{student.address}</td>
              <td>{student.qualification}</td>
              <td>{student.interestToStudy}</td>
              <td>{student.dateOfJoin}</td>
              <td>
                <button onClick={() => handleUpdate(student.studentId, student)}>Update</button>
                <button onClick={() => handleDelete(student.studentId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default StudentsSection;
