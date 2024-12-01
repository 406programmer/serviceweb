import React from "react";
import { useParams, useLocation } from "react-router-dom";
import styles from "./ServiceItem.module.css";

const ServiceItem = () => {
  const { serviceName, subServiceName } = useParams();
  const location = useLocation();
  const { subService } = location.state || {}; // Get sub-service data from state
 console.log(subService);
  if (!subService) {
    return <div className={styles.error}>Service not found or invalid access!</div>;
  }

  return (
    <div className={styles.serviceItem}>
      <header className={styles.header}  style={{ backgroundImage: `url(${subService.image})` }}>
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

        <button onClick={() => window.history.back()} className={styles.backButton}>
          Back
        </button>
      </section>
    </div>
  );
};

export default ServiceItem;
