import React, { useState } from "react";
import styles from "./LoginSign.module.css"; // Import your CSS module
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

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

  const handleClose = () => {
    navigate("/home"); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      validatePassword();
    }
    if (!passwordError) {
      alert(isSignup ? "Signed up successfully!" : "Logged in successfully!");
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.formContainer}>
      <button className={styles.closeButton} onClick={handleClose}>×</button>
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
            required
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          {isSignup && (
            <>
              <input
                className={styles.input}
                type="password"
                placeholder="Confirm Password"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {passwordError && <p className={styles.error}>{passwordError}</p>}
            </>
          )}
          <button className={styles.button} type="submit">
            {isSignup ? "Signup" : "Login"}
          </button>
        </form>
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
