import React, { useContext } from "react";
import CartContext from "../Context/CartContext";
import { services } from "../Pages/Service";
import styles from "./Cart.module.css";
import { useNavigate } from "react-router-dom";
import RecommandedServiceColab from "../Component/RecommandedServiceColab";

const Cart = () => {
  const { cartState, dispatch } = useContext(CartContext);
  const { items: cart } = cartState; // Destructure `items` as `cart`
  const navigate = useNavigate();

  const findServiceById = (serviceId) => {
    for (let category of services) {
      const service = category.subServices.find((subService) => subService.id === serviceId);
      if (service) return service;
    }
    return null;
  };

  const totalPrice = cart.reduce((total, item) => {
    const service = findServiceById(item.id);
    return total + (service?.price || 0);
  }, 0);

  return (
    <div className={`${styles.cartContainer} `}>
      <h2 className={styles.cartTitle}>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className={`${styles.cartList}`}>
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
                    src={service?.image || "placeholder.png"}
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
        <div className="flex gap-x-2">
          <button onClick={() => window.history.back()} className={styles.backButton}>
            Back
          </button>
          <button
            className={styles.paymentButton}
            onClick={() => navigate("/payment")}
          >
            Proceed to Payment
          </button>
        </div>
      </div>
      <div style={{marginTop:"3rem"}}>
      <RecommandedServiceColab/>
      </div>
    </div>
  );
};

export default Cart;
