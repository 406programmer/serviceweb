import React from "react";
import {services} from "./Service"
import { useNavigate, useParams } from "react-router-dom";
import styles from "./ServiceDetail.module.css"

const ServiceDetail = () => {
  const navigate = useNavigate();
  const { serviceName } = useParams();

  const service = services.find((s) => s.path === serviceName);

  return (
    <div className={styles.main}>
      <h1 className="text-center p-6 font-bold ">{service?.title}</h1>
      <ul className={styles.items}>
        {service?.subServices.map((subService, index) => (
          <li key={index} className={styles.item}>{subService}</li>
        ))}
      </ul>
     
      <button onClick={()=>navigate(-1)} className={styles.button}> Back</button>
      </div>  
    
  );
};

export default ServiceDetail;
