// routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const { Signup, login } = require('../controllers/Authcontrollers');
const router = express.Router();
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.json());


// Register Route for Tutor
// router.post('/register/tutor', async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     const existingUser = await Tutor.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already in use' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const tutor = new Tutor({ name, email, password: hashedPassword });
//     await tutor.save();

//     const token = generateToken(tutor);
//     res.json({ token });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


// // Register Route for Student
// router.post('/register/student', async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     const existingUser = await Student.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already in use' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const student = new Student({ name, email, password: hashedPassword });
//     await student.save();

//     const token = generateToken(student);
//     res.json({ token });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

router.post('/register',Signup)

// Login Route
// router.post('/login', async (req, res) => {
//   const { email, password, role } = req.body;
//   try {
//     const User = role === 'tutor' ? Tutor : Student;
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const token = generateToken(user);
//     res.json({ token });
//   } catch (error) { 
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;

router.post('/login',login)