

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './AdminDashboard.css';
// import { Newspaper } from '@mui/icons-material';

// const AdminDashboard = () => {
//     // State variables
//     const [students, setStudents] = useState([]);
//     const [users, setUsers] = useState([]);
//     const [trainees, setTrainees] = useState([]);
//     const [batches, setBatches] = useState([]);
//     const [courses, setCourses] = useState([]);
    
//     const [newStudent, setNewStudent] = useState({ id: 0, username: '', email: '', contact: '', gender: '', dateOfBirth: '', address: '', qualification: '', interestToStudy: '' });
//     const [newUser, setNewUser] = useState({ username: '', password: '', role: '' });
//     const [newTrainee, setNewTrainee] = useState({ id: 0, username: '', email: '', contact: '', gender: '', dateOfBirth: '', address: '', qualification: '', interestToStudy: '' });
//     const [newBatch, setNewBatch] = useState({ id: 0, name: '', startDate: '', endDate: '' });
//     const [newCourse, setNewCourse] = useState({ id: 0, name: '', description: '' });

//     const API_URL = 'http://localhost:5078/api/Admin';  // Adjust according to your backend

//     // Fetch functions
//     useEffect(() => {
//         fetchStudents();
//         fetchUsers();
//         fetchTrainees();
//         fetchBatches();
//         fetchCourses();
//     }, []);

//     const fetchStudents = async () => {
//         try {
//             const response = await axios.get(`http://localhost:5078/api/Admin/Students`);
//             setStudents(response.data);
//         } catch (error) {
//             console.error('Error fetching students:', error);
//         }
//     };

//     const fetchUsers = async () => {
//         try {
//             const response = await axios.get(`${API_URL}/Users`);
//             setUsers(response.data);
//         } catch (error) {
//             console.error('Error fetching users:', error);
//         }
//     };

//     const fetchTrainees = async () => {
//         try {
//             const response = await axios.get(`${API_URL}/Trainees`);
//             setTrainees(response.data);
//         } catch (error) {
//             console.error('Error fetching trainees:', error);
//         }
//     };

//     const fetchBatches = async () => {
//         try {
//             const response = await axios.get(`${API_URL}/Batches`);
//             console.log(response.data)
//             setBatches(response.data);
//         } catch (error) {
//             console.error('Error fetching batches:', error);
//         }
//     };

//     const fetchCourses = async () => {
//         try {
//             const response = await axios.get(`${API_URL}/Courses`);
//             setCourses(response.data);
//         } catch (error) {
//             console.error('Error fetching courses:', error);
//         }
//     };

//     // CRUD handlers
//     const deleteStudent = async (id) => {
//         try {
//             await axios.delete(`${API_URL}/Students/${id}`);
//             fetchStudents(); // Refresh the student list
//         } catch (error) {
//             console.error('Error deleting student:', error);
//         }
//     };

//     const deleteUser = async (id) => {
//         try {
//             await axios.delete(`${API_URL}/Users/${id}`);
//             fetchUsers(); // Refresh the user list
//         } catch (error) {
//             console.error('Error deleting user:', error);
//         }
//     };

//     const deleteTrainee = async (id) => {
//         try {
//             await axios.delete(`${API_URL}/Trainees/${id}`);
//             fetchTrainees(); // Refresh the trainee list
//         } catch (error) {
//             console.error('Error deleting trainee:', error);
//         }
//     };

//     const deleteBatch = async (id) => {
//         try {
//             await axios.delete(`${API_URL}/Batches/${id}`);
//             fetchBatches(); // Refresh the batch list
//         } catch (error) {
//             console.error('Error deleting batch:', error);
//         }
//     };

//     const deleteCourse = async (id) => {
//         try {
//             await axios.delete(`${API_URL}/Courses/${id}`);
//             fetchCourses(); // Refresh the course list
//         } catch (error) {
//             console.error('Error deleting course:', error);
//         }
//     };

//     const handleAddStudent = async () => {
//         try {
//             console.log(newStudent)
//            const response =  await axios.post(`http://localhost:5078/api/Admin/Students`, {
//                 "id": 0,
//                 "username": newStudent.username,
//                 "password": "string",
//                 "email": newStudent.email,
//                 "contact": newStudent.contact,
//                 "gender": newStudent.gender,
//                 "dateOfBirth": "2024-09-11T07:41:42.800Z",
//                 "address": newStudent.address,
//                 "qualification": newStudent.qualification,
//                 "interestToStudy": newStudent.interestToStudy
//               });
//               localStorage.setItem("studentId",response.data.id)
//             setNewStudent({ id: 0, username: '', email: '', contact: '', gender: '', dateOfBirth: '', address: '', qualification: '', interestToStudy: '' });
//             fetchStudents(); // Refresh the student list
//         } catch (error) {
//             console.error('Error adding student:', error);
//         }
//     };

//     const handleAddUser = async () => {
//         try {
//             await axios.post(`${API_URL}/Users`, newUser);
//             setNewUser({ username: '', password: '', role: '' });
//             fetchUsers(); // Refresh the user list
//         } catch (error) {
//             console.error('Error adding user:', error);
//         }
//     };

//     const handleAddTrainee = async () => {
//         try {
//             await axios.post(`http://localhost:5078/api/Admin/Trainees`, {
//                 "id": 0,
//                 "username": newTrainee.username,
//                 "password": "string",
//                 "email": newTrainee.email,
//                 "gender": newTrainee.gender,
//                 "dateofBirth": newTrainee.dateOfBirth,
//                 "address": "string",
//                 "contact": "string",
//                 "qualification": "string",
//                 "trainingProgram": "string"
//               });
//             setNewTrainee({ id: 0, username: '', email: '', contact: '', gender: '', dateOfBirth: '', address: '', qualification: '', interestToStudy: '' });
//             fetchTrainees(); // Refresh the trainee list
//         } catch (error) {
//             console.error('Error adding trainee:', error);
//         }
//     };

//     const handleAddBatch = async () => {
//         try {
//             await axios.post(`${API_URL}/Batches`,{
                 
//           "id": 0,
//            "batchName": newBatch.name,
//        "startDate": "2024-09-11T10:01:43.608Z",
//             "endDate": "2024-09-11T10:01:43.608Z"});
//             setNewBatch({ id: 0, name: '', startDate: '', endDate: '' });
//             fetchBatches(); // Refresh the batch list
//         } catch (error) {
//             console.error('Error adding batch:', error);
//         }
//     };

//     const handleAddCourse = async () => {
//         try {
//             await axios.post(`${API_URL}/Courses`, {
//                 "id": 0,
//   "courseName": newCourse.name,
//   "duration": parseInt(newCourse.description),
//   "fees": 2147483647,
  
//             });
//             setNewCourse({ id: 0, name: '', description: '' });
//             fetchCourses(); // Refresh the course list
//         } catch (error) {
//             console.error('Error adding course:', error);
//         }
//     };

//     return (
//         <div className="admin-dashboard">
//             <h1>Admin Dashboard</h1>

//             <h2>Students</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Contact</th>
//                         <th>Gender</th>
//                         <th>Date of Birth</th>
//                         <th>Address</th>
//                         <th>Qualification</th>
//                         <th>Interests</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {students.map(student => (
//                         <tr key={student.id}>
//                             <td>{student.username}</td>
//                             <td>{student.email}</td>
//                             <td>{student.contact}</td>
//                             <td>{student.gender}</td>
//                             <td>{new Date(student.dateOfBirth).toLocaleDateString()}</td>
//                             <td>{student.address}</td>
//                             <td>{student.qualification}</td>
//                             <td>{student.interestToStudy}</td>
//                             <td>
//                                 <button onClick={() => deleteStudent(student.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             <h2>Add New Student</h2>
//             <input type="text" placeholder="Name" value={newStudent.username} onChange={(e) => setNewStudent({ ...newStudent, username: e.target.value })} />
//             <input type="email" placeholder="Email" value={newStudent.email} onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })} />
//             <input type="text" placeholder="Contact" value={newStudent.contact} onChange={(e) => setNewStudent({ ...newStudent, contact: e.target.value })} />
//             <input type="text" placeholder="Gender" value={newStudent.gender} onChange={(e) => setNewStudent({ ...newStudent, gender: e.target.value })} />
//             <input type="date" value={newStudent.dateOfBirth} onChange={(e) => setNewStudent({ ...newStudent, dateOfBirth: e.target.value })} />
//             <input type="text" placeholder="Address" value={newStudent.address} onChange={(e) => setNewStudent({ ...newStudent, address: e.target.value })} />
//             <input type="text" placeholder="Qualification" value={newStudent.qualification} onChange={(e) => setNewStudent({ ...newStudent, qualification: e.target.value })} />
//             <input type="text" placeholder="Interests" value={newStudent.interestToStudy} onChange={(e) => setNewStudent({ ...newStudent, interestToStudy: e.target.value })} />
//             <button onClick={handleAddStudent}>Add Student</button>

//             <h2>Users</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Username</th>
//                         <th>Role</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map(user => (
//                         <tr key={user.id}>
//                             <td>{user.username}</td>
//                             <td>{user.role}</td>
//                             <td>
//                                 <button onClick={() => deleteUser(user.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             <h2>Add New User</h2>
//             <input type="text" placeholder="Username" value={newUser.username} onChange={(e) => setNewUser({ ...newUser, username: e.target.value })} />
//             <input type="password" placeholder="Password" value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
//             <input type="text" placeholder="Role" value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })} />
//             <button onClick={handleAddUser}>Add User</button>

//             <h2>Trainees</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Contact</th>
//                         <th>Gender</th>
//                         <th>Date of Birth</th>
//                         <th>Address</th>
//                         <th>Qualification</th>
//                         <th>Interests</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {trainees.map(trainee => (
//                         <tr key={trainee.id}>
//                             <td>{trainee.username}</td>
//                             <td>{trainee.email}</td>
//                             <td>{trainee.contact}</td>
//                             <td>{trainee.gender}</td>
//                             <td>{new Date(trainee.dateOfBirth).toLocaleDateString()}</td>
//                             <td>{trainee.address}</td>
//                             <td>{trainee.qualification}</td>
//                             <td>{trainee.trainingProgram}</td>
//                             <td>
//                                 <button onClick={() => deleteTrainee(trainee.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             <h2>Add New Trainee</h2>
//             <input type="text" placeholder="Name" value={newTrainee.username} onChange={(e) => setNewTrainee({ ...newTrainee, username: e.target.value })} />
//             <input type="email" placeholder="Email" value={newTrainee.email} onChange={(e) => setNewTrainee({ ...newTrainee, email: e.target.value })} />
//             <input type="text" placeholder="Contact" value={newTrainee.contact} onChange={(e) => setNewTrainee({ ...newTrainee, contact: e.target.value })} />
//             <input type="text" placeholder="Gender" value={newTrainee.gender} onChange={(e) => setNewTrainee({ ...newTrainee, gender: e.target.value })} />
//             <input type="date" value={newTrainee.dateOfBirth} onChange={(e) => setNewTrainee({ ...newTrainee, dateOfBirth: e.target.value })} />
//             <input type="text" placeholder="Address" value={newTrainee.address} onChange={(e) => setNewTrainee({ ...newTrainee, address: e.target.value })} />
//             <input type="text" placeholder="Qualification" value={newTrainee.qualification} onChange={(e) => setNewTrainee({ ...newTrainee, qualification: e.target.value })} />
//             <input type="text" placeholder="Interests" value={newTrainee.interestToStudy} onChange={(e) => setNewTrainee({ ...newTrainee, interestToStudy: e.target.value })} />
//             <button onClick={handleAddTrainee}>Add Trainee</button>

//             <h2>Batches</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Start Date</th>
//                         <th>End Date</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {batches.map(batch => (
//                         <tr key={batch.id}>
//                             <td>{batch.batchName}</td>
//                             <td>{new Date(batch.startDate).toLocaleDateString()}</td>
//                             <td>{new Date(batch.endDate).toLocaleDateString()}</td>
//                             <td>
//                                 <button onClick={() => deleteBatch(batch.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             <h2>Add New Batch</h2>
//             <input type="text" placeholder="Name" value={newBatch.name} onChange={(e) => setNewBatch({ ...newBatch, name: e.target.value })} />
//             <input type="date" placeholder="Start Date" value={newBatch.startDate} onChange={(e) => setNewBatch({ ...newBatch, startDate: e.target.value })} />
//             <input type="date" placeholder="End Date" value={newBatch.endDate} onChange={(e) => setNewBatch({ ...newBatch, endDate: e.target.value })} />
//             <button onClick={handleAddBatch}>Add Batch</button>

//             <h2>Courses</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Description</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {courses.map(course => (
//                         <tr key={course.id}>
//                             <td>{course.courseName}</td>
//                             <td>{course.duration}</td>
//                             <td>
//                                 <button onClick={() => deleteCourse(course.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             <h2>Add New Course</h2>
//             <input type="text" placeholder="Name" value={newCourse.name} onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })} />
//             <input type="text" placeholder="Description" value={newCourse.description} onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })} />
//             <button onClick={handleAddCourse}>Add Course</button>
//         </div>
//     );
// };

// export default AdminDashboard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
    // State variables
    const [students, setStudents] = useState([]);
    const [users, setUsers] = useState([]);
    const [trainees, setTrainees] = useState([]);
    const [batches, setBatches] = useState([]);
    const [courses, setCourses] = useState([]);
    
    const [editMode, setEditMode] = useState({ student: false, user: false, trainee: false, batch: false, course: false });
    
    const [newStudent, setNewStudent] = useState({ id: 0, username: '', email: '', contact: '', gender: '', dateOfBirth: '', address: '', qualification: '', interestToStudy: '' });
    const [newUser, setNewUser] = useState({ id: 0, username: '', password: '', role: '' });
    const [newTrainee, setNewTrainee] = useState({ id: 0, username: '', email: '', contact: '', gender: '', dateOfBirth: '', address: '', qualification: '', interestToStudy: '' });
    const [newBatch, setNewBatch] = useState({ id: 0, name: '', startDate: '', endDate: '' });
    const [newCourse, setNewCourse] = useState({ id: 0, name: '', description: '' });

    const API_URL = 'http://localhost:5078/api/Admin';  // Adjust according to your backend

    // Fetch functions
    useEffect(() => {
        fetchStudents();
        fetchUsers();
        fetchTrainees();
        fetchBatches();
        fetchCourses();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await axios.get(`${API_URL}/Students`);
            setStudents(response.data);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    const fetchUsers = async () => {
        try {
            const response = await axios.get(`${API_URL}/Users`);
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const fetchTrainees = async () => {
        try {
            const response = await axios.get(`${API_URL}/Trainees`);
            setTrainees(response.data);
        } catch (error) {
            console.error('Error fetching trainees:', error);
        }
    };

    const fetchBatches = async () => {
        try {
            const response = await axios.get(`${API_URL}/Batches`);
            setBatches(response.data);
        } catch (error) {
            console.error('Error fetching batches:', error);
        }
    };

    const fetchCourses = async () => {
        try {
            const response = await axios.get(`${API_URL}/Courses`);
            setCourses(response.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    // CRUD handlers
    const deleteStudent = async (id) => {
        try {
            await axios.delete(`${API_URL}/Students/${id}`);
            fetchStudents(); // Refresh the student list
        } catch (error) {
            console.error('Error deleting student:', error);
        }
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`${API_URL}/Users/${id}`);
            fetchUsers(); // Refresh the user list
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const deleteTrainee = async (id) => {
        try {
            await axios.delete(`${API_URL}/Trainees/${id}`);
            fetchTrainees(); // Refresh the trainee list
        } catch (error) {
            console.error('Error deleting trainee:', error);
        }
    };

    const deleteBatch = async (id) => {
        try {
            await axios.delete(`${API_URL}/Batches/${id}`);
            fetchBatches(); // Refresh the batch list
        } catch (error) {
            console.error('Error deleting batch:', error);
        }
    };

    const deleteCourse = async (id) => {
        try {
            await axios.delete(`${API_URL}/Courses/${id}`);
            fetchCourses(); // Refresh the course list
        } catch (error) {
            console.error('Error deleting course:', error);
        }
    };

    const handleAddStudent = async () => {
        try {
            if (editMode.student) {
                await axios.put(`${API_URL}/Students/${newStudent.id}`, newStudent);
                setEditMode({ ...editMode, student: false });
            } else {
                await axios.post(`${API_URL}/Students`, newStudent);
            }
            setNewStudent({ id: 0, username: '', email: '', contact: '', gender: '', dateOfBirth: '', address: '', qualification: '', interestToStudy: '' });
            fetchStudents(); // Refresh the student list
        } catch (error) {
            console.error('Error adding/updating student:', error);
        }
    };

    const handleEditStudent = (student) => {
        setNewStudent(student);
        setEditMode({ ...editMode, student: true });
    };

    const handleAddUser = async () => {
        try {
            if (editMode.user) {
                await axios.put(`${API_URL}/Users/${newUser.id}`, newUser);
                setEditMode({ ...editMode, user: false });
            } else {
                await axios.post(`${API_URL}/Users`, newUser);
            }
            setNewUser({ id: 0, username: '', password: '', role: '' });
            fetchUsers(); // Refresh the user list
        } catch (error) {
            console.error('Error adding/updating user:', error);
        }
    };

    const handleEditUser = (user) => {
        setNewUser(user);
        setEditMode({ ...editMode, user: true });
    };

    const handleAddTrainee = async () => {
        try {
            if (editMode.trainee) {
                await axios.put(`${API_URL}/Trainees/${newTrainee.id}`, newTrainee);
                setEditMode({ ...editMode, trainee: false });
            } else {
                await axios.post(`${API_URL}/Trainees`, newTrainee);
            }
            setNewTrainee({ id: 0, username: '', email: '', contact: '', gender: '', dateOfBirth: '', address: '', qualification: '', interestToStudy: '' });
            fetchTrainees(); // Refresh the trainee list
        } catch (error) {
            console.error('Error adding/updating trainee:', error);
        }
    };

    const handleEditTrainee = (trainee) => {
        setNewTrainee(trainee);
        setEditMode({ ...editMode, trainee: true });
    };

    const handleAddBatch = async () => {
        try {
            if (editMode.batch) {
                await axios.put(`${API_URL}/Batches/${newBatch.id}`, newBatch);
                setEditMode({ ...editMode, batch: false });
            } else {
                await axios.post(`${API_URL}/Batches`, newBatch);
            }
            setNewBatch({ id: 0, name: '', startDate: '', endDate: '' });
            fetchBatches(); // Refresh the batch list
        } catch (error) {
            console.error('Error adding/updating batch:', error);
        }
    };

    const handleEditBatch = (batch) => {
        setNewBatch(batch);
        setEditMode({ ...editMode, batch: true });
    };

    const handleAddCourse = async () => {
        try {
            if (editMode.course) {
                await axios.put(`${API_URL}/Courses/${newCourse.id}`, newCourse);
                setEditMode({ ...editMode, course: false });
            } else {
                await axios.post(`${API_URL}/Courses`, newCourse);
            }
            setNewCourse({ id: 0, name: '', description: '' });
            fetchCourses(); // Refresh the course list
        } catch (error) {
            console.error('Error adding/updating course:', error);
        }
    };

    const handleEditCourse = (course) => {
        setNewCourse(course);
        setEditMode({ ...editMode, course: true });
    };

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>

            {/* Students Table */}
            <h2>Students</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Gender</th>
                        <th>Date of Birth</th>
                        <th>Address</th>
                        <th>Qualification</th>
                        <th>Interests</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td>{student.username}</td>
                            <td>{student.email}</td>
                            <td>{student.contact}</td>
                            <td>{student.gender}</td>
                            <td>{new Date(student.dateOfBirth).toLocaleDateString()}</td>
                            <td>{student.address}</td>
                            <td>{student.qualification}</td>
                            <td>{student.interestToStudy}</td>
                            <td>
                                <button onClick={() => handleEditStudent(student)}>Edit</button>
                                <button onClick={() => deleteStudent(student.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Student Form */}
            <h3>{editMode.student ? 'Edit Student' : 'Add Student'}</h3>
            <form>
                <input type="text" placeholder="Username" value={newStudent.username} onChange={e => setNewStudent({ ...newStudent, username: e.target.value })} />
                <input type="email" placeholder="Email" value={newStudent.email} onChange={e => setNewStudent({ ...newStudent, email: e.target.value })} />
                <input type="text" placeholder="Contact" value={newStudent.contact} onChange={e => setNewStudent({ ...newStudent, contact: e.target.value })} />
                <input type="text" placeholder="Gender" value={newStudent.gender} onChange={e => setNewStudent({ ...newStudent, gender: e.target.value })} />
                <input type="date" placeholder="Date of Birth" value={newStudent.dateOfBirth} onChange={e => setNewStudent({ ...newStudent, dateOfBirth: e.target.value })} />
                <input type="text" placeholder="Address" value={newStudent.address} onChange={e => setNewStudent({ ...newStudent, address: e.target.value })} />
                <input type="text" placeholder="Qualification" value={newStudent.qualification} onChange={e => setNewStudent({ ...newStudent, qualification: e.target.value })} />
                <input type="text" placeholder="Interests" value={newStudent.interestToStudy} onChange={e => setNewStudent({ ...newStudent, interestToStudy: e.target.value })} />
                <button type="button" onClick={handleAddStudent}>{editMode.student ? 'Update' : 'Add'} Student</button>
            </form>

            {/* Users Table */}
            <h2>Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>{user.role}</td>
                            <td>
                                <button onClick={() => handleEditUser(user)}>Edit</button>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* User Form */}
            <h3>{editMode.user ? 'Edit User' : 'Add User'}</h3>
            <form>
                <input type="text" placeholder="Username" value={newUser.username} onChange={e => setNewUser({ ...newUser, username: e.target.value })} />
                <input type="password" placeholder="Password" value={newUser.password} onChange={e => setNewUser({ ...newUser, password: e.target.value })} />
                <input type="text" placeholder="Role" value={newUser.role} onChange={e => setNewUser({ ...newUser, role: e.target.value })} />
                <button type="button" onClick={handleAddUser}>{editMode.user ? 'Update' : 'Add'} User</button>
            </form>

            {/* Trainees Table */}
            <h2>Trainees</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Gender</th>
                        <th>Date of Birth</th>
                        <th>Address</th>
                        <th>Qualification</th>
                        <th>Interests</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {trainees.map(trainee => (
                        <tr key={trainee.id}>
                            <td>{trainee.username}</td>
                            <td>{trainee.email}</td>
                            <td>{trainee.contact}</td>
                            <td>{trainee.gender}</td>
                            <td>{new Date(trainee.dateOfBirth).toLocaleDateString()}</td>
                            <td>{trainee.address}</td>
                            <td>{trainee.qualification}</td>
                            <td>{trainee.interestToStudy}</td>
                            <td>
                                <button onClick={() => handleEditTrainee(trainee)}>Edit</button>
                                <button onClick={() => deleteTrainee(trainee.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Trainee Form */}
            <h3>{editMode.trainee ? 'Edit Trainee' : 'Add Trainee'}</h3>
            <form>
                <input type="text" placeholder="Username" value={newTrainee.username} onChange={e => setNewTrainee({ ...newTrainee, username: e.target.value })} />
                <input type="email" placeholder="Email" value={newTrainee.email} onChange={e => setNewTrainee({ ...newTrainee, email: e.target.value })} />
                <input type="text" placeholder="Contact" value={newTrainee.contact} onChange={e => setNewTrainee({ ...newTrainee, contact: e.target.value })} />
                <input type="text" placeholder="Gender" value={newTrainee.gender} onChange={e => setNewTrainee({ ...newTrainee, gender: e.target.value })} />
                <input type="date" placeholder="Date of Birth" value={newTrainee.dateOfBirth} onChange={e => setNewTrainee({ ...newTrainee, dateOfBirth: e.target.value })} />
                <input type="text" placeholder="Address" value={newTrainee.address} onChange={e => setNewTrainee({ ...newTrainee, address: e.target.value })} />
                <input type="text" placeholder="Qualification" value={newTrainee.qualification} onChange={e => setNewTrainee({ ...newTrainee, qualification: e.target.value })} />
                <input type="text" placeholder="Interests" value={newTrainee.interestToStudy} onChange={e => setNewTrainee({ ...newTrainee, interestToStudy: e.target.value })} />
                <button type="button" onClick={handleAddTrainee}>{editMode.trainee ? 'Update' : 'Add'} Trainee</button>
            </form>

            {/* Batches Table */}
            <h2>Batches</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {batches.map(batch => (
                        <tr key={batch.id}>
                            <td>{batch.name}</td>
                            <td>{new Date(batch.startDate).toLocaleDateString()}</td>
                            <td>{new Date(batch.endDate).toLocaleDateString()}</td>
                            <td>
                                <button onClick={() => handleEditBatch(batch)}>Edit</button>
                                <button onClick={() => deleteBatch(batch.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Batch Form */}
            <h3>{editMode.batch ? 'Edit Batch' : 'Add Batch'}</h3>
            <form>
                <input type="text" placeholder="Name" value={newBatch.name} onChange={e => setNewBatch({ ...newBatch, name: e.target.value })} />
                <input type="date" placeholder="Start Date" value={newBatch.startDate} onChange={e => setNewBatch({ ...newBatch, startDate: e.target.value })} />
                <input type="date" placeholder="End Date" value={newBatch.endDate} onChange={e => setNewBatch({ ...newBatch, endDate: e.target.value })} />
                <button type="button" onClick={handleAddBatch}>{editMode.batch ? 'Update' : 'Add'} Batch</button>
            </form>

            {/* Courses Table */}
            <h2>Courses</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => (
                        <tr key={course.id}>
                            <td>{course.name}</td>
                            <td>{course.description}</td>
                            <td>
                                <button onClick={() => handleEditCourse(course)}>Edit</button>
                                <button onClick={() => deleteCourse(course.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Course Form */}
            <h3>{editMode.course ? 'Edit Course' : 'Add Course'}</h3>
            <form>
                <input type="text" placeholder="Name" value={newCourse.name} onChange={e => setNewCourse({ ...newCourse, name: e.target.value })} />
                <textarea placeholder="Description" value={newCourse.description} onChange={e => setNewCourse({ ...newCourse, description: e.target.value })} />
                <button type="button" onClick={handleAddCourse}>{editMode.course ? 'Update' : 'Add'} Course</button>
            </form>
        </div>
    );
};

export default AdminDashboard;
