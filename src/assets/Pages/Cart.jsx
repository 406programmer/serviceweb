import React, { useContext } from "react";
import CartContext from "../Context/CartContext";
import { services } from "../Pages/Service"; // Assuming services is an array exported from Service.jsx
import styles from "./Cart.module.css"; // Create a separate CSS file for cart styles

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  // Function to find the service based on the ID in the cart item
  const findServiceById = (serviceId) => {
    console.log('Finding service with ID:', serviceId); // Log the service ID being searched for
    for (let category of services) {
      const service = category.subServices.find((subService) => subService.id === serviceId);
      if (service) {
        console.log('Found service:', service); // Log if a service is found
        return service;
      }
    }
    console.log('No service found for ID:', serviceId); // Log if no service is found
    return null; // If no matching service is found    
  };

  console.log('Cart data:', cart); // Log the entire cart to check if it has the expected structure

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className={styles.cartList}>
          {cart.map((item) => {
            console.log('Cart Item:', item); // Log each cart item to check its content
            const service = findServiceById(item.id); // Find the service based on the cart item ID
            console.log('Service found for item:', service); // Log the service object found or null

            // If no service is found, show a message or fallback
            if (!service) {
              return (
                <li key={item.id} className={styles.cartItem}>
                  <p>Service not found for ID: {item.id}</p>
                </li>
              );
            }

            // If service is found, render it
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
