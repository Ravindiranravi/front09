import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInPage from './Components/SignInPage';
import StudentNewUser from './Components/StudentNewUser';
import AdminDashboard from './Components/AdminDashboard';
import StudentDashboard from './Components/StudentDashboard';
import TraineeDashboard from './Components/TeacherDashboard';
import StudentsSection from './Components/StudentsSection';
import BatchDashboard from './Components/BatchDashboard';

function App() {
  return (
   <Router>
    <Routes>
    <Route path="/" element={<SignInPage />} />
    <Route path="/student-new-user" element={<StudentNewUser />} />
    <Route path="/AdminDashboard" element={<AdminDashboard />}/>
    <Route path="/studentDashboard" element={<StudentDashboard />} />
    <Route path="/traineeDashboard" element={<TraineeDashboard />} />
    <Route paath="/StudentsSection" elemenmt={<StudentsSection />} />
    {/* //<Route paath="/BatchDashboard" elemenmt={<BatchDashboard />} /> */}
    </Routes>
   </Router>
  );
}

export default App;
