import React, { useContext } from "react";
import CartContext from "../Context/CartContext";
import { services } from "../Pages/Service"; // Assuming services is an array exported from Service.jsx
import styles from "./Cart.module.css"; // Create a separate CSS file for cart styles

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  // Function to find the service based on the ID in the cart item
  const findServiceById = (serviceId) => {
    for (let category of services) {
      const service = category.subServices.find((subService) => subService.id === serviceId);
      if (service) {
        return service;
      }
    }
    return null; // If no matching service is found    
  };

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className={styles.cartList}>
          {cart.map((item) => {
            const service = findServiceById(item.id); // Find service by ID from cart item
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
      )}
    </div>
  );
};

export default Cart;
