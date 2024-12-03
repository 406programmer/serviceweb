import React from "react";
import logo from "../images/logo.png"

const Payment = () => {
  const handlePayment = () => {
    const options = {
      key: "rzp_test_C7mJfUqIP06DzM", // Replace with your Razorpay Key ID
      amount: 50000, // Amount in paise (50000 paise = ₹500)
      currency: "INR",
      name: "Green Star Solution Limited",
      description: "Test Transaction",
      image: logo, // Optional company logo
      handler: function (response) {
        alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
        console.log(response);
      },
      prefill: {
        name: "Customer Name", // Optional prefilled name
        email: "customer@example.com", // Optional prefilled email
        contact: "9999999999", // Optional prefilled phone number
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

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Payment Page</h1>
      <p>Click the button below to make your payment.</p>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#3399cc",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={handlePayment}
      >
        Pay ₹500
      </button>
    </div>
  );
};

export default Payment;
