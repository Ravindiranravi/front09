import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Grid,
  Card,
  CardContent,
  Button,
  Snackbar,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./StudentDashboard.css"

const StudentDashboard = () => {
  const [student, setStudent] = useState(null);
  const [courses, setCourses] = useState([]);
  const [batches, setBatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const studentResponse = await axios.get("https://localhost:7256/api/Student/{id}"); // Adjust the ID as needed
        const coursesResponse = await axios.get("https://localhost:7256/api/Course");
        const batchesResponse = await axios.get("https://localhost:7256/api/Batch");
        
        // setStudent(studentResponse.data);
        setCourses(coursesResponse.data);
        setBatches(batchesResponse.data);
      } catch (err) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center" color="primary">
        Student Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom>Student Information</Typography>
              {student && (
                <>
                  <Typography><strong>Username:</strong> {student.Username}</Typography>
                  <Typography><strong>Email:</strong> {student.Email}</Typography>
                  <Typography><strong>Contact:</strong> {student.Contact}</Typography>
                  <Typography><strong>Gender:</strong> {student.Gender}</Typography>
                  <Typography><strong>Date of Birth:</strong> {new Date(student.DateOfBirth).toLocaleDateString()}</Typography>
                  <Typography><strong>Address:</strong> {student.Address}</Typography>
                  <Typography><strong>Qualification:</strong> {student.Qualification}</Typography>
                  <Typography><strong>Interest to Study:</strong> {student.InterestToStudy}</Typography>
                  <Typography><strong>Date of Join:</strong> {new Date(student.DateOfJoin).toLocaleDateString()}</Typography>
                </>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom>Courses</Typography>
              <TableContainer component={Paper}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Course ID</TableCell>
                      <TableCell>Course Name</TableCell>
                      <TableCell>Duration</TableCell>
                      <TableCell>Fees</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {courses.map((course) => (
                      <TableRow key={course.CourseId}>
                        <TableCell>{course.CourseId}</TableCell>
                        <TableCell>{course.CourseName}</TableCell>
                        <TableCell>{course.CourseDuration}</TableCell>
                        <TableCell>{course.CourseFees}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom>Batches</Typography>
              <TableContainer component={Paper}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Batch ID</TableCell>
                      <TableCell>Batch Name</TableCell>
                      <TableCell>Start Date</TableCell>
                      <TableCell>Start Year</TableCell>
                      <TableCell>End Year</TableCell>
                      <TableCell>Course ID</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {batches.map((batch) => (
                      <TableRow key={batch.BatchId}>
                        <TableCell>{batch.BatchId}</TableCell>
                        <TableCell>{batch.BatchName}</TableCell>
                        <TableCell>{new Date(batch.StartDate).toLocaleDateString()}</TableCell>
                        <TableCell>{batch.StartYear}</TableCell>
                        <TableCell>{batch.EndYear}</TableCell>
                        <TableCell>{batch.CourseId}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
        action={
          <IconButton size="small" color="inherit" onClick={handleSnackbarClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </Container>
  );
};

export default StudentDashboard;
