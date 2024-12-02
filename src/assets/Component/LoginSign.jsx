import React, { useState, useContext } from "react";
import styles from "./LoginSign.module.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext"; // Import AuthContext

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // For error message
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext); // Access dispatch

  const handleToggle = () => setIsSignup(!isSignup);

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match!");
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignup) {
      validatePassword();
    }
  
    if (!passwordError) {
      const url = isSignup
        ? "http://localhost:5001/api/auth/signup"
        : "http://localhost:5001/api/auth/login";
      const body = { email, password };
  
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
  
        const data = await response.json();
        console.log('Response from server:', data); // Log the full response data
  
        if (response.ok) {
          console.log('Response is OK');
          alert(isSignup ? "Signed up successfully!" : "Logged in successfully!");
        
          if (data.user) {
            console.log('User data:', data.user); // Log user data if available
        
            // Update the authentication state
            dispatch({
              type: "LOGIN",
              payload: data.user, // Assuming the API returns user info
            });
            
            // Navigate after successful login
            navigate(-1);
          } else {
            console.log('No user data found'); // Log if user data is missing
            setErrorMessage(data.message); // Show error message
          }
        } else {
          console.log('Error in response:', data.message); // Log error response from server
          setErrorMessage(data.message); // Show error message
        }
      } catch (error) {
        console.error("Error:", error);
        setErrorMessage("Something went wrong. Please try again.");
      }
    }
  };
  

  return (
    <div className={styles.overlay}>
      <div className={styles.formContainer}>
        <button className={styles.closeButton} onClick={() => navigate("/home")}>
          ×
        </button>
        <div className={styles.toggle}>
          <button
            className={`${styles.toggleButton} ${!isSignup ? styles.active : ""}`}
            onClick={() => setIsSignup(false)}
          >
            Login
          </button>
          <button
            className={`${styles.toggleButton} ${isSignup ? styles.active : ""}`}
            onClick={() => setIsSignup(true)}
          >
            Signup
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <h2>{isSignup ? "Signup" : "Login"}</h2>
          <input
            className={styles.input}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {isSignup && (
            <>
              <input
                className={styles.input}
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {passwordError && <p className={styles.error}>{passwordError}</p>}
            </>
          )}
          <button className={styles.button} type="submit">
            {isSignup ? "Signup" : "Login"}
          </button>
        </form>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        <div className={styles.toggleLink}>
          {isSignup ? (
            <span>
              Already have an account?{" "}
              <a onClick={() => setIsSignup(false)}>Login</a>
            </span>
          ) : (
            <span>
              Not a member?{" "}
              <a onClick={() => setIsSignup(true)}>Sign up</a>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
