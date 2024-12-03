import React, { useContext } from "react";
import CartContext from "../Context/CartContext";
import { services } from "../Pages/Service"; // Assuming services is an array exported from Service.jsx
import styles from "./Cart.module.css"; // Create a separate CSS file for cart styles
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);
  const navigate = useNavigate();
  // Function to find the service based on the ID in the cart item
  const findServiceById = (serviceId) => {
    for (let category of services) {
      const service = category.subServices.find((subService) => subService.id === serviceId);
      if (service) return service;
    }
    return null; // If no matching service is found
  };

  // Calculate the total price of the cart
  const totalPrice = cart.reduce((total, item) => {
    const service = findServiceById(item.id);
    return total + (service?.price || 0); // Assuming each service has a `price` property
  }, 0);

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className={styles.cartList}>
            {cart.map((item) => {
              const service = findServiceById(item.id);

              if (!service) {
                return (
                  <li key={item.id} className={styles.cartItem}>
                    <p>Service not found for ID: {item.id}</p>
                  </li>
                );
              }

              return (
                <li key={item.id} className={styles.cartItem}>
                  <img
                    src={service?.image || "placeholder.png"} // If no image, use placeholder
                    alt={service?.name || "Service Image"}
                    className={styles.serviceImage}
                  />
                  <div className={styles.itemDetails}>
                    <h3 className={styles.serviceName}>{service?.name}</h3>
                    <p className={styles.serviceDescription}>
                      {service?.description || "No description available."}
                    </p>
                    <p className={styles.servicePrice}>
                      Price: ₹{service?.price || "N/A"}
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_FROM_CART", payload: item })
                    }
                    className={styles.removeButton}
                  >
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
          <div className={styles.cartSummary}>
            <h3>Total Price: ₹{totalPrice}</h3>
            
          </div>
        </>
      )}
     <div className={styles.buttonContainer}>
  
  <div className=" flex gap-x-2">
    <button onClick={() => window.history.back()} className={styles.backButton}>
    Back
  </button>
  <button className={styles.paymentButton} onClick={() => navigate("/payment")}>Proceed to Payment</button>
    </div>
</div>
    </div>
  );
};

export default Cart;
