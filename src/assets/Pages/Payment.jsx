import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import logo from "../images/logo.png";
import { useAuth } from "../Context/AuthContext";
import { useCart } from "../Context/CartContext";
import razorLogo from "../images/razorLogo.jpg";
import styles from "./Payment.module.css"; // Import the CSS module
import PaymentSuccess from "./PaymentSuccess"; // Import the PaymentSuccess component

const Payment = () => {
  const { authState } = useAuth();
  const { cartState } = useCart();
  const [isPriceLoaded, setIsPriceLoaded] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false); // Track payment success

  useEffect(() => {
    console.log("authState:", authState);
    console.log("cartState:", cartState);

    if (cartState.totalPrice !== undefined) {
      setIsPriceLoaded(true);
    }
  }, [cartState.totalPrice]);

  useEffect(() => {
    console.log("authState:", authState);
  }, [authState]);

  if (authState.loading || !isPriceLoaded) {
    return <div className={styles.loadingText}>Loading...</div>;
  }

  if (!authState.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const userName = authState?.user?.UserName || "Customer Name";
  const userEmail = authState?.user?.EmailID || "customer@example.com";
  const userContact = authState?.user?.MobileNumber || "9999999999";

  const handlePayment = () => {
    console.log("Proceeding to payment...");

    if (!authState?.isAuthenticated || !authState?.user) {
      alert("User data is unavailable. Please log in.");
      return;
    }

    const amount = cartState.totalPrice ? cartState.totalPrice * 100 : 0;
    if (amount <= 0) {
      alert("Invalid amount. Cannot proceed with payment.");
      return;
    }

    if (!window.Razorpay) {
      alert("Razorpay is not available.");
      return;
    }

    const options = {
      key: "rzp_test_zMPkg86PcRAKPa",
      amount: amount,
      currency: "INR",
      name: "Green Star Solution Limited",
      description: "Test Transaction",
      image: logo,
      handler: function (response) {
        alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
        console.log(response);
        setPaymentSuccess(true); // Set payment success to true when payment is successful
      },
      prefill: {
        name: authState.user.name,
        email: authState.user.email,
        contact: authState.user.MobileNumber,
      },
      notes: {
        address: "Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
    razorpay.on("payment.failed", function (response) {
      alert("Payment failed: " + response.error.description);
      console.log(response.error);
    });
  };

  const isValidPrice = typeof cartState.totalPrice === "number" && cartState.totalPrice > 0;

  return (
    <div className={styles.container}>
      {paymentSuccess ? (
        <PaymentSuccess /> // Display PaymentSuccess component after successful payment
      ) : (
        <div className={styles.paymentInfoContainer}>
          <h2>Payment Page</h2>
          {cartState.totalPrice ? (
            <p className={styles.totalAmount}>Total amount: ₹{cartState.totalPrice}</p>
          ) : (
            <p className={styles.loadingText}>Loading total amount...</p>
          )}
        </div>
      )}

      {!paymentSuccess && (
        <>
          <div className={styles.cardInfoSection}>
            <div className={styles.cardInfoText}>
              <p>Pay securely via Razorpay</p>
              <p className={styles.prefillInfo}>
                <span>Name: </span>{userName}<br />
                <span>Email: </span>{userEmail}<br />
                <span>Contact: </span>{userContact}
              </p>
            </div>
            <img className={styles.cardLogo} src={razorLogo} alt="Razorpay Logo" />
          </div>

          <div className={styles.buttonContainer}>
            <button onClick={() => window.history.back()} className={styles.backButton}>
              Back
            </button>
            <button
              className={styles.paymentButton}
              onClick={handlePayment}
              disabled={!isValidPrice}
            >
              Pay ₹{cartState.totalPrice || 0}
            </button>
          </div>

          {cartState.totalPrice <= 0 && (
            <p className={styles.error}>Invalid amount. Cannot proceed with payment.</p>
          )}
        </>
      )}
    </div>
  );
};

export default Payment;
