import React from "react";
import styles from "./Service.module.css";
import { Link, Outlet, useParams } from "react-router-dom";
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
      id:1001,
      description: "Advanced systems for purifying water to meet quality standards for drinking and industrial use.",
      image: w11,
      details: {
        overview: "Water purification systems are advanced technologies designed to purify water to meet the highest standards for both drinking and industrial purposes. These systems ensure the removal of contaminants, bacteria, viruses, and harmful chemicals, making water safe for consumption and industrial processes.",
        benefits: [
          "Ensures Safe Drinking Water: Provides clean and safe drinking water, free from harmful pathogens and pollutants.",
          "Improved Industrial Processes: Industrial water treatment ensures the water used in processes is of high quality, reducing downtime due to contamination.",
          "Cost-Efficient: Reduces the need for bottled water or external water sources, cutting operational costs."
        ],
        whyChoose: [
          "Protects health by providing clean water for consumption and processes.",
          "Meets regulatory standards for drinking and industrial water.",
          "Customized systems that cater to specific needs, whether for households, businesses, or industrial plants."
        ],
        procedure: [
          "Assessment: The water source is analyzed to identify contaminants and impurities.",
          "System Design: A purification system is tailored based on the quality of water and the specific requirements (e.g., filtration, reverse osmosis, UV treatment).",
          "Installation: The system is installed with regular monitoring to ensure efficiency.",
          "Maintenance: Regular servicing ensures the longevity of the system and the continued purity of water."
        ]
      }
    },
    {
      name: "Industrial Water Treatment",
      id:1002,
      description: "Solutions designed for treating water in industrial facilities, ensuring regulatory compliance.",
      image: w12,
      details: {
        overview: "Industrial water treatment focuses on the treatment of water used in industrial settings. This includes water used in manufacturing, cooling, and other industrial applications. Ensuring water is free from contaminants like heavy metals, oils, and chemicals is critical for maintaining smooth operations and protecting machinery.",
        benefits: [
          "Prevents Equipment Damage: Treating water removes harmful chemicals and minerals that could damage equipment.",
          "Regulatory Compliance: Meets environmental standards by ensuring discharged water is free of harmful pollutants.",
          "Sustainability: Reduces water consumption and waste, contributing to eco-friendly operations."
        ],
        whyChoose: [
          "Reduces maintenance costs by preventing the build-up of scale, rust, and corrosion in pipes and machinery.",
          "Ensures compliance with strict environmental regulations.",
          "Enhances the efficiency and longevity of industrial machinery by using high-quality water."
        ],
        procedure: [
          "Water Quality Assessment: Detailed analysis of water used in the industrial processes.",
          "Custom Treatment Plan: A tailored plan involving filtration, chemical treatment, or reverse osmosis, based on the water’s impurities.",
          "Implementation: Installation of the treatment system to purify water.",
          "Ongoing Monitoring & Maintenance: Regular checks to ensure compliance with safety standards and optimal operation."
        ]
      }
    },
    {
      name: "Effluent Treatment Plants (ETP)",
      id:1003,
      description: "Facilities for treating wastewater from industries, removing harmful pollutants before discharge.",
      image: w13,
      details: {
        overview: "Effluent Treatment Plants (ETP) are facilities designed to treat wastewater from industries. These plants remove harmful pollutants such as oils, chemicals, and biological contaminants, ensuring that treated water is safe for discharge or reuse, minimizing environmental pollution.",
        benefits: [
          "Protects the Environment: Reduces the pollution load in rivers, lakes, and oceans by treating harmful effluents before discharge.",
          "Recycling Water: Treated water can be reused for non-potable applications, reducing water consumption.",
          "Compliance with Laws: Helps industries meet local and international environmental regulations regarding wastewater treatment."
        ],
        whyChoose: [
          "Minimizes environmental impact by treating wastewater to remove contaminants.",
          "Ensures businesses comply with environmental laws, avoiding fines and penalties.",
          "Can reduce costs by enabling the reuse of treated water for industrial processes or landscaping."
        ],
        procedure: [
          "Effluent Assessment: Industrial wastewater is analyzed to determine the nature of pollutants.",
          "System Design: Design of an appropriate treatment system (physical, chemical, biological treatment) tailored to the effluent characteristics.",
          "Installation & Operation: The ETP is installed, and wastewater is treated through various stages like coagulation, flocculation, and filtration.",
          "Maintenance: Continuous monitoring and regular maintenance to ensure effective treatment."
        ]
      }
    },
    {
      name: "Rainwater Harvesting",
      id:1004,
      description: "Techniques to collect and store rainwater for reuse, reducing water scarcity.",
      image: w14,
      details: {
        overview: "Rainwater harvesting involves the collection and storage of rainwater for reuse. By capturing rainwater, this system provides a sustainable source of water, which can be used for irrigation, industrial processes, or even for drinking after purification.",
        benefits: [
          "Reduces Water Scarcity: Helps alleviate pressure on local water sources, especially during dry periods.",
          "Cost Savings: Reduces water bills by substituting harvested rainwater for potable water in non-drinking applications.",
          "Environmentally Friendly: Reduces reliance on groundwater and municipal water systems, conserving these vital resources."
        ],
        whyChoose: [
          "Creates an independent water supply, especially useful for areas with limited access to water.",
          "Contributes to sustainability efforts by reducing the demand for freshwater resources.",
          "Enhances water security by providing an alternative water source."
        ],
        procedure: [
          "Site Survey: An evaluation of the site to determine the rainwater collection potential.",
          "Design System: Design of a rainwater collection system, including gutters, downpipes, storage tanks, and filtration systems.",
          "Installation: The system is set up to collect and store rainwater from roofs and other surfaces.",
          "Maintenance: Regular cleaning and maintenance of filters and storage tanks to ensure the system’s efficiency."
        ]
      }
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
  const { serviceName } = useParams(); // Get the selected service name from the URL

  // Find the service based on the serviceName param
  const selectedService = services.find(service => service.path === serviceName);


  return (
    
      !selectedService ? (
        <>
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
    </> )
    :
    <Outlet/>
  
)
}
