import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ServiceItem.module.css";
import CartContext from "../Context/CartContext";
import AuthContext from "../Context/AuthContext";
import StarRating from "./StarRating";

const ServiceItem = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { subService } = location.state || {}; // Get sub-service data from state
  const { cart, dispatch: cartDispatch } = useContext(CartContext); // Access cart and dispatch from CartContext
  const { authState, dispatch: authDispatch } = useContext(AuthContext); // Access authState and dispatch from AuthContext

  const isAlreadyInCart = cart.some((item) => item.id === subService?.id);

  const handleCartButtonClick = () => {
    if (!authState.isAuthenticated) {
      navigate("/login");
    }

    if (isAlreadyInCart) {
      // Remove item from cart
      cartDispatch({ type: "REMOVE_FROM_CART", payload: subService });
    } else {
      // Add item to cart
      cartDispatch({ type: "ADD_TO_CART", payload: subService });
    }
  };

  if (!subService) {
    return <div className={styles.error}>Service not found or invalid access!</div>;
  }

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, [subService]);

  return (
    <div className={styles.serviceItem}>
      <header className={styles.header} style={{ backgroundImage: `url(${subService.image})` }}>
        <h1 className={styles.title}>{subService.name}</h1>
        <img src={subService.image} alt={subService.name} className={styles.image} />
      </header>

      <section className={styles.content}>
        <div className={styles.description}>
          <p>{subService.details?.overview}</p>
          <h2>Benefits</h2>
          <ul>
            {subService.details.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>

          <h2>Why Choose This Service?</h2>
          <ul>
            {subService.details.whyChoose.map((reason, index) => (
              <li key={index}>{reason}</li>
            ))}
          </ul>

          <h2>Procedure</h2>
          <ol>
            {subService.details.procedure.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
        <StarRating />
        <button onClick={handleCartButtonClick} className={styles.cartButton}>
          {isAlreadyInCart ? "Remove from Cart" : "Add to Cart"}
        </button>

        <button onClick={() => window.history.back()} className={styles.backButton}>
          Back
        </button>
      </section>
    </div>
  );
};

export default ServiceItem;
