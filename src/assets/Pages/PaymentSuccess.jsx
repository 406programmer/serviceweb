// PaymentSuccess.jsx
import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Success icon
import styles from "./PaymentSuccess.module.css"; 
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
    const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <FaCheckCircle className={styles.successIcon} />
      </div>
      <h2 className={styles.title}>Payment Successful!</h2>
      <p className={styles.message}>
        Thank you for your purchase! Your payment was processed successfully.
      </p>
      <div className={styles.details}>
        <p>Your transaction ID: <span className={styles.transactionId}>#1234567890</span></p>
        <p>Amount Paid: ₹5000</p>
      </div>
      <button className={styles.continueButton} onClick={()=>navigate("/services")}>Continue Shopping</button>
    </div>
  );
};

export default PaymentSuccess;
