import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ServiceItem.module.css";
import { useCart } from "../Context/CartContext";
import { useAuth } from "../Context/AuthContext";
import StarRating from "./StarRating";

const ServiceItem = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { subService } = location.state || {}; // Get sub-service data from state
  const { cartState, dispatch: cartDispatch } = useCart(); // Access cart context
  const { authState } = useAuth(); // Access authState from AuthContext

  // Check if the item is already in the cart
  const isAlreadyInCart = Array.isArray(cartState.items)
    ? cartState.items.some((item) => item.id === subService?.id)
    : false;

  // Handle Add/Remove from Cart
  const handleCartButtonClick = () => {
    if (!authState.isAuthenticated) {
      navigate("/login");
      return;
    }

    if (isAlreadyInCart) {
      cartDispatch({ type: "REMOVE_FROM_CART", payload: subService });
    } else {
      cartDispatch({ type: "ADD_TO_CART", payload: subService });
    }
  };

  // Handle missing sub-service
  if (!subService) {
    return (
      <div className={styles.error}>
        <p>Service not found. Please return to the services page.</p>
        <button
          onClick={() => navigate("/services")}
          className={styles.backButton}
        >
          Back to Services
        </button>
      </div>
    );
  }

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [subService]);

  return (
    <div className={styles.serviceItem}>
      <header
        className={styles.header}
        style={{ backgroundImage: `url(${subService.image || "default.jpg"})` }}
      >
        <h1 className={styles.title}>{subService.name}</h1>
        <img
          src={subService.image}
          alt={subService.name}
          className={styles.image}
        />
      </header>

      <section className={styles.content}>
        <div className={styles.description}>
          <p>{subService.details?.overview}</p>
          <h2>Benefits</h2>
          <ul>
            {subService.details?.benefits?.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>

          <h2>Why Choose This Service?</h2>
          <ul>
            {subService.details?.whyChoose?.map((reason, index) => (
              <li key={index}>{reason}</li>
            ))}
          </ul>

          <h2>Procedure</h2>
          <ol>
            {subService.details?.procedure?.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
        <StarRating />
        <div className=" flex flex-col ">

        <div >
          <button onClick={handleCartButtonClick} className={styles.cartButton}>
            {isAlreadyInCart ? "Remove from Cart" : "Add to Cart"}
          </button>
          <button onClick={() => navigate(-1)} className={styles.backButton}>
            Back
          </button>
        </div>
         {isAlreadyInCart && <button className={styles.gotoCartButton} onClick={()=>{navigate("/cart");
    window.scrollTo(0, 0);}}>Go to Cart</button>}
        </div>
      </section>
    </div>
  );
};

export default ServiceItem;
