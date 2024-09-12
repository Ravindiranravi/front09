import React, { useState, useEffect } from 'react';
import {
  Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Snackbar, IconButton, CircularProgress
} from '@mui/material';
import { Edit, Delete, Close } from '@mui/icons-material';
import axios from 'axios';
import './TeacherDashboard.css'; // Import your CSS file

const TeacherDashboard = () => {
  const [teacher, setTeacher] = useState(null);
  const [courses, setCourses] = useState([]);
  const [openEditCourseDialog, setOpenEditCourseDialog] = useState(false);
  const [openDeleteCourseDialog, setOpenDeleteCourseDialog] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teacherResponse = await axios.get('https://localhost:7256/api/Teacher/1'); // Adjust the ID as needed
        const coursesResponse = await axios.get('https://localhost:7256/api/Teacher/GetCourses');
        
        setTeacher(teacherResponse.data);
        setCourses(coursesResponse.data);
      } catch (err) {
        setError('Failed to fetch data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEditCourseClick = (course) => {
    setSelectedCourse(course);
    setOpenEditCourseDialog(true);
  };

  const handleDeleteCourseClick = (course) => {
    setSelectedCourse(course);
    setOpenDeleteCourseDialog(true);
  };

  const handleEditCourseClose = () => {
    setOpenEditCourseDialog(false);
    setSelectedCourse(null);
  };

  const handleDeleteCourseClose = () => {
    setOpenDeleteCourseDialog(false);
    setSelectedCourse(null);
  };

  const handleEditCourseSubmit = async () => {
    try {
      await axios.put(`/api/Teacher/PutCourse/${selectedCourse.CourseId}`, selectedCourse);
      setSnackbarMessage('Course updated successfully');
      setOpenSnackbar(true);
      const updatedCourses = courses.map(course =>
        course.CourseId === selectedCourse.CourseId ? selectedCourse : course
      );
      setCourses(updatedCourses);
      handleEditCourseClose();
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  const handleDeleteCourseSubmit = async () => {
    try {
      await axios.delete(`/api/Teacher/PutCourse/${selectedCourse.CourseId}`);
      setSnackbarMessage('Course deleted successfully');
      setOpenSnackbar(true);
      setCourses(courses.filter(course => course.CourseId !== selectedCourse.CourseId));
      handleDeleteCourseClose();
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Container className="container">
      <Typography variant="h4" gutterBottom align="center" color="primary">
        Teacher Dashboard
      </Typography>

      <Paper className="paper">
        <Typography variant="h6" gutterBottom>Teacher Information</Typography>
        {teacher && (
          <div className="teacher-info">
            <Typography><strong>Username:</strong> {teacher.Username}</Typography>
            <Typography><strong>Email:</strong> {teacher.Email}</Typography>
            <Typography><strong>Address:</strong> {teacher.Address}</Typography>
            <Typography><strong>Date of Birth:</strong> {new Date(teacher.DateOfBirth).toLocaleDateString()}</Typography>
            <Typography><strong>Qualification:</strong> {teacher.Qualification}</Typography>
            <Typography><strong>Date of Join:</strong> {new Date(teacher.DateOfJoin).toLocaleDateString()}</Typography>
          </div>
        )}
      </Paper>

      <Paper className="paper">
        <Typography variant="h6" gutterBottom>Courses</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Course ID</TableCell>
                <TableCell>Course Name</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>Fees</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.CourseId}>
                  <TableCell>{course.CourseId}</TableCell>
                  <TableCell>{course.CourseName}</TableCell>
                  <TableCell>{course.CourseDuration}</TableCell>
                  <TableCell>{course.CourseFees}</TableCell>
                  <TableCell>
                    <Button startIcon={<Edit />} color="primary" onClick={() => handleEditCourseClick(course)}>
                      Edit
                    </Button>
                    <Button startIcon={<Delete />} color="secondary" onClick={() => handleDeleteCourseClick(course)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Edit Course Dialog */}
      {selectedCourse && (
        <Dialog open={openEditCourseDialog} onClose={handleEditCourseClose}>
          <DialogTitle>Edit Course</DialogTitle>
          <DialogContent>
            <TextField
              label="Course Name"
              fullWidth
              margin="normal"
              value={selectedCourse.CourseName}
              onChange={(e) => setSelectedCourse({ ...selectedCourse, CourseName: e.target.value })}
            />
            <TextField
              label="Duration"
              fullWidth
              margin="normal"
              value={selectedCourse.CourseDuration}
              onChange={(e) => setSelectedCourse({ ...selectedCourse, CourseDuration: e.target.value })}
            />
            <TextField
              label="Fees"
              fullWidth
              margin="normal"
              value={selectedCourse.CourseFees}
              onChange={(e) => setSelectedCourse({ ...selectedCourse, CourseFees: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleEditCourseClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleEditCourseSubmit} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}

      {/* Delete Course Dialog */}
      {selectedCourse && (
        <Dialog open={openDeleteCourseDialog} onClose={handleDeleteCourseClose}>
          <DialogTitle>Delete Course</DialogTitle>
          <DialogContent>
            Are you sure you want to delete the course {selectedCourse.CourseName}?
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDeleteCourseClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleDeleteCourseSubmit} color="secondary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      )}

      {/* Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
        action={
          <IconButton size="small" color="inherit" onClick={handleSnackbarClose}>
            <Close fontSize="small" />
          </IconButton>
        }
      />
    </Container>
  );
};

export default TeacherDashboard;
