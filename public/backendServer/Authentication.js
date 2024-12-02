import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mysql from "mysql2";

// Create an instance of express
const app = express();
const port = 5001; // Backend server port

// Use CORS to allow requests from frontend (React app)
app.use(cors({
  origin: "http://localhost:5173", // Allow your frontend port
  methods: ["GET", "POST"],
}));

// Middleware setup
app.use(bodyParser.json()); // To parse JSON bodies

// Create MySQL connection
const db = mysql.createConnection({
  host: "localhost", // Database host
  user: "root", // MySQL username
  password: "sourabh@71234", // MySQL password
  database: "project" // Database name
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
  } else {
    console.log("Connected to the database.");
  }
});

// POST /signup route
app.post("/api/auth/signup", (req, res) => {
  const { email, password } = req.body;
  // Check if user already exists
  const checkUserQuery = "SELECT * FROM SignDetail WHERE Email = ?";
  db.query(checkUserQuery, [email], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }
    if (result.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Insert new user
    const insertQuery = "INSERT INTO SignDetail (Email, Password) VALUES (?, ?)";
    db.query(insertQuery, [email, password], (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Error creating user" });
      }
      res.status(201).json({ message: "User created successfully" });
    });
  });
});

// POST /login route
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  
  // SQL query to fetch user info
  const checkUserQuery = `
    SELECT UserDetails.*
    FROM UserDetails
    JOIN SignDetail ON UserDetails.UserID = SignDetail.UserID
    WHERE SignDetail.Email = ? AND SignDetail.Password = ?`;

  // Execute query
  db.query(checkUserQuery, [email, password], (err, result) => {
    if (err) {
      console.error("Database query error:", err);
      return res.status(500).json({ message: "Database error" });
    }

    console.log("Query result:", result); // Log the query result to check the data
    if (result.length === 0) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
   
     // Use the first user in the result
    console.log("User data:", result[0]); // Log the fetched user data
    return res.status(200).json({
      message: "Login successful",
      user: result[0] // Send the user data in the response
    });
  });
});


// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
