import React from "react";
import styles from "./Service.module.css";
import { Link } from "react-router-dom";

export const services = [
  {
    title: "Water Treatment and Management",
    icon: "📦",
    path: "water-treatment",
    bgColor: "#bae545",
    subServices: [
      "Water Purification Systems",
      "Industrial Water Treatment",
      "Effluent Treatment Plants (ETP)",
      "Rainwater Harvesting"
    ]
  },
  {
    title: "Sewage and Wastewater Treatment",
    icon: "⚡",
    path: "sewage-treatment",
    bgColor: "#d4fd07",
    subServices: [
      "Sewage Treatment Plants (STP)",
      "Recycling Wastewater",
      "Septic Tank Cleaning",
      "Drainage System Solutions"
    ]
  },
  {
    title: "Environmental Compliance & Safety",
    icon: "💧",
    path: "environmental-compliance",
    bgColor: "#94e380",
    subServices: [
      "Environmental Audits",
      "Green Building Consultancy",
      "Solid Waste Management"
    ]
  },
  {
    title: "Fire Safety and Security Solution",
    icon: "♻️",
    path: "fire-safety",
    bgColor: "#6ce42b",
    subServices: [
      "Fire Suppression Systems",
      "Fire Safety Audits",
      "Training and Drills",
      "Smoke and Heat Detection",
    ]
  },
  {
    title: "Compliance Management Solutions",
    icon: "🚰",
    path: "compliance-management",
    bgColor: "#a6ee0a",
    subServices: [
      "Renewable Energy Systems",
      "Air Quality Monitoring",
      "Green Landscaping" 
      ]
  }
];


export default function Service() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>OUR SERVICES</h1>
      <div className={` ${styles.grid} m-10`}>
        {services.map((service, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ backgroundColor: service.bgColor }}
          >
            <Link
            to={`/services/${service.path}`}
            key={index}
            className={styles.card}
            style={{ backgroundColor: service.bgColor }}
          >
             <div className={styles.icon}>{service.icon}</div>
            <h3 className={styles.title}>{service.title}</h3>
            <div className={styles.arrow}>&#10132;</div>
          </Link>
           
          </div>
        ))}
      </div>
    </div>
  );
}
