import React from "react";
import styles from "./Service.module.css";
import { Link } from "react-router-dom";
import watertm from "../images/waterManage/watertm.jpg";
import w11 from "../images/waterManage/w11.jpg";
import w12 from "../images/waterManage/w12.jpg";
import w13 from "../images/waterManage/w13.jpg";
import w14 from "../images/waterManage/w14.jpg";
import s1 from "../images/sewagewm/s1.jpg"
import c1 from "../images/compliancems/c1.jpg"
import e1 from "../images/environmentcs/e1.jpg"
import f1 from "../images/firess/f1.jpg"

export const services = [
  {
    title: "Water Treatment and Management",
    icon: "📦",
    path: "water-treatment",
    img: watertm,
    bgColor: "#bae545",
    subServices: [
      {
        name: "Water Purification Systems",
        description: "Advanced systems for purifying water to meet quality standards for drinking and industrial use.",
        image:w11
      },
      {
        name: "Industrial Water Treatment",
        description: "Solutions designed for treating water in industrial facilities, ensuring regulatory compliance.",
        image: w12
      },
      {
        name: "Effluent Treatment Plants (ETP)",
        description: "Facilities for treating wastewater from industries, removing harmful pollutants before discharge.",
        image: w13
      },
      {
        name: "Rainwater Harvesting",
        description: "Techniques to collect and store rainwater for reuse, reducing water scarcity.",
        image: w14
      }
    ]
  }
  ,
  {
    title: "Sewage and Wastewater Treatment",
    icon: "⚡",
    img :s1,
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
    img : e1,
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
    img: f1,
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
    img: c1,
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
             <div className={styles.icon}><img src={service.img} alt={service.icon}/></div>
            <h3 className={styles.title}>{service.title}</h3>
            <div className={styles.arrow}>&#10132;</div>
          </Link>
           
          </div>
        ))}
      </div>
    </div>
  );
}
