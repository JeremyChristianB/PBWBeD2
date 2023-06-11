import express from 'express';

const router = express.Router();

// Route for the home page
router.get('/', (req, res) => {
  res.render('basic/homepage');
});

// Route for the login page
router.get('/login', (req, res) => {
  res.render('basic/login');
});

// Route for the signup page
router.get('/signup', (req, res) => {
  res.render('basic/signup');
});

// Route for the signupGuru page
router.get('/signupGuru', (req, res) => {
  res.render('teacher/signupTeacher');
});

// Route for the signupSiswa page
router.get('/signupSiswa', (req, res) => {
  res.render('student/signupStudent');
});

// Route for the login page
router.post('/account/login', (req, res) => {
    res.render('teacher/homepageTeacher');
  });
  
router.post('/account/logout', (req, res) => {
    res.redirect('/');
});

export default router;
