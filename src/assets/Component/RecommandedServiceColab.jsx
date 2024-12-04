import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RecommandedServices.module.css";
import { services } from "../Pages/Service";

const RecommandedServiceColab = () => {
  const [recommendedServices, setRecommendedServices] = useState([]);
  const navigate = useNavigate();

  // Assuming you have a method to get the current logged-in user's ID
  const userId = localStorage.getItem('user_id');  // Or use context, redux, etc.

  useEffect(() => {
    if (!userId) {
      console.error("User is not logged in");
      return;
    }

    // Pass the user_id to the API
    fetch(`http://localhost:5003/recommendations?user_id=${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    })
      .then((response) => {
        if (!response.ok) {
          console.error("Error fetching data:", response.statusText);
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setRecommendedServices(data.recommended_services || []);  // Update to reflect the API response structure
      })
      .catch((error) => {
        console.error("Error fetching recommended services:", error);
      });
  }, [userId]);

  const findServiceDetails = (serviceName) => {
    for (const service of services) {
      const matchedSubService = service.subServices?.find(
        (subService) => subService.name === serviceName
      );
      if (matchedSubService) return matchedSubService;
    }
    return null;
  };

  return (
    <div className={`${styles.recommendations} bg-green-200 `}>
      <h2>Customers who purchased this item also purchased</h2>
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          {recommendedServices.map((recommendedService, index) => {
            const serviceDetails = findServiceDetails(recommendedService.ServiceName);
            return (
              <div key={index} className={styles.serviceCard}>
                <img
                  src={serviceDetails?.image || "placeholder.png"}
                  alt={recommendedService.ServiceName}
                  className={styles.image}
                />
                <h3>{recommendedService.ServiceName}</h3>
                <p>{serviceDetails?.description || "No description available."}</p>
                <button
                  onClick={() =>
                    navigate(
                      `/services/${serviceDetails.path}/${recommendedService.ServiceName}`,
                      { state: { subService: serviceDetails } }
                    )
                  }
                  className={styles.button}
                >
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecommandedServiceColab;
