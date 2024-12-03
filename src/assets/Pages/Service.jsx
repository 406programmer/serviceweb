import React from "react";
import styles from "./Service.module.css";
import { Link, Outlet, useParams } from "react-router-dom";
import watertm from "../images/waterManage/watertm.jpg";
import w11 from "../images/waterManage/w11.jpg";
import w12 from "../images/waterManage/w12.jpg";
import w13 from "../images/waterManage/w13.jpg";
import w14 from "../images/waterManage/w14.jpg";
import s1 from "../images/sewagewm/s1.jpg"
import s11 from "../images/sewagewm/s11.jpg"
import s12 from "../images/sewagewm/s12.jpg"
import s13 from "../images/sewagewm/s13.jpeg"
import s14 from "../images/sewagewm/s14.jpg"
import c1 from "../images/compliancems/c1.jpg"
import c11 from "../images/compliancems/c11.webp"
import c12 from "../images/compliancems/c12.jpg"
import c13 from "../images/compliancems/c13.jpg"
import e1 from "../images/environmentcs/e1.jpg"
import e11 from "../images/environmentcs/e11.jpeg"
import e12 from "../images/environmentcs/e12.jpg"
import e13 from "../images/environmentcs/e13.webp"
import f1 from "../images/firess/f1.jpg"
import f11 from "../images/firess/f11.jpg"
import f12 from "../images/firess/f12.jpg"
import f13 from "../images/firess/f13.jpg"
import f14 from "../images/firess/f14.jpg"

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
      price :18000.00,
      description: "Advanced systems for purifying water to meet quality standards for drinking and industrial use.",
      image: w11,
      path: "water-treatment",
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
      price :15000.00,
      path: "water-treatment",
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
      path: "water-treatment",
      price :25000.00,
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
       path: "water-treatment",
       price :10000.00,
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
    img: s1,
    path: "sewage-treatment",
    bgColor: "#d4fd07",
    subServices: [
      {
        name: "Sewage Treatment Plants (STP)",
        id: 104,
        price :35000.00,
        description: "Facilities designed to treat and process sewage, making it safe for discharge or reuse.",
        image: s11, // Placeholder for an actual image variable
        path: "sewage-treatment",
        details: {
          overview: "Sewage Treatment Plants (STP) are engineered facilities that treat sewage to remove contaminants and ensure that the discharged water is environmentally safe. These systems use physical, biological, and chemical processes to treat wastewater efficiently.",
          benefits: [
            "Environmental Safety: Treated sewage prevents pollution of natural water bodies.",
            "Water Reuse: Enables the recycling of treated water for irrigation and industrial purposes.",
            "Regulatory Compliance: Meets legal standards for wastewater treatment and discharge."
          ],
          whyChoose: [
            "Reduces environmental impact by treating harmful waste effectively.",
            "Ensures compliance with environmental laws and avoids penalties.",
            "Supports sustainable water management practices."
          ],
          procedure: [
            "Assessment: Analyze the sewage characteristics to design the appropriate treatment process.",
            "System Installation: Set up the STP with components like primary treatment tanks, aeration systems, and sludge management units.",
            "Treatment: The sewage undergoes processes like sedimentation, aeration, and filtration to remove pollutants.",
            "Monitoring and Maintenance: Regular monitoring ensures optimal performance and adherence to standards."
          ]
        }
      },
      {
        name: "Recycling Wastewater",
        id: 105,
        price :12000.00,
        description: "Processes to recycle wastewater for non-potable uses, reducing water wastage.",
        image: s12, // Placeholder for an actual image variable
        path: "sewage-treatment",
        details: {
          overview: "Wastewater recycling involves treating and reusing wastewater for various purposes such as irrigation, industrial cooling, and landscaping. This reduces dependency on freshwater sources and promotes sustainable water usage.",
          benefits: [
            "Conservation of Resources: Reduces the demand for fresh water by reusing treated wastewater.",
            "Cost Efficiency: Lowers water procurement costs for industries and municipalities.",
            "Eco-Friendly: Minimizes the impact on natural water bodies by reducing wastewater discharge."
          ],
          whyChoose: [
            "Promotes sustainability by reusing treated wastewater.",
            "Complies with environmental and industrial water usage standards.",
            "Cost-effective solution for industries requiring large volumes of water."
          ],
          procedure: [
            "Water Quality Analysis: Test wastewater to determine required treatment levels.",
            "Treatment Setup: Install recycling systems such as filtration, reverse osmosis, or UV treatment.",
            "Reuse and Distribution: Treated water is distributed for applications like irrigation or industrial use.",
            "Monitoring: Regular testing to ensure water quality standards are met."
          ]
        }
      },
      {
        name: "Septic Tank Cleaning",
        id: 106,
        price :5000.00,
        description: "Comprehensive cleaning services to maintain septic tanks and prevent blockages.",
        image: s13, // Placeholder for an actual image variable
        path: "sewage-treatment",
        details: {
          overview: "Septic tank cleaning is an essential maintenance service to remove sludge, grease, and other waste accumulations in septic systems, ensuring their efficiency and preventing overflows.",
          benefits: [
            "Prevents Overflow: Regular cleaning avoids system blockages and potential spills.",
            "Extends System Life: Reduces wear and tear, increasing the lifespan of the septic tank.",
            "Environmental Protection: Prevents untreated waste from contaminating soil and groundwater."
          ],
          whyChoose: [
            "Essential for the longevity and efficiency of septic systems.",
            "Reduces unpleasant odors and potential health hazards.",
            "Complies with hygiene and environmental safety standards."
          ],
          procedure: [
            "Inspection: Assess the tank’s condition and sludge levels.",
            "Pumping: Remove waste using vacuum trucks and pumps.",
            "Cleaning: Wash the tank’s interior to remove remaining residue.",
            "Post-Maintenance Check: Ensure the system is functioning efficiently after cleaning."
          ]
        }
      },
      {
        name: "Drainage System Solutions",
        id: 107,
        price :8000.00,
        description: "Custom solutions for maintaining and optimizing drainage systems in residential and industrial areas.",
        image: s14, // Placeholder for an actual image variable
        path: "sewage-treatment",
        details: {
          overview: "Drainage system solutions involve the design, maintenance, and repair of drainage networks to prevent waterlogging and ensure efficient wastewater management. These services are crucial for both urban and industrial setups.",
          benefits: [
            "Prevents Waterlogging: Ensures proper water flow, avoiding flooding and property damage.",
            "Enhances Efficiency: Well-maintained drainage systems operate more effectively.",
            "Cost Savings: Reduces expenses related to repairs and flood damage."
          ],
          whyChoose: [
            "Tailored solutions to meet the needs of residential, commercial, and industrial properties.",
            "Prevents structural damage caused by water accumulation.",
            "Improves the overall sanitation of the area."
          ],
          procedure: [
            "Assessment: Survey the site to understand drainage issues and requirements.",
            "Design and Planning: Develop customized drainage layouts and improvement plans.",
            "Implementation: Install or upgrade drainage systems with proper piping and flow mechanisms.",
            "Maintenance: Provide regular cleaning and maintenance services to prevent clogs and blockages."
          ]
        }
      }
    ]
  }
  ,
  {
    title: "Environmental Compliance & Safety",
    icon: "💧",
    img: e1,
    path: "environmental-compliance",
    bgColor: "#94e380",
    subServices: [
      {
        name: "Environmental Audits",
        id: 108,
        price:20000.00,
        description: "Comprehensive evaluation of environmental performance to ensure compliance with regulations.",
        image: e11, // Placeholder for an actual image variable
        path: "environmental-compliance",
        details: {
          overview: "Environmental audits are systematic evaluations of an organization’s compliance with environmental laws and standards. These audits help identify areas for improvement and ensure sustainable operations.",
          benefits: [
            "Regulatory Compliance: Ensures adherence to environmental laws and standards.",
            "Improved Sustainability: Identifies opportunities for reducing environmental impact.",
            "Cost Savings: Reduces risks of fines and operational inefficiencies."
          ],
          whyChoose: [
            "Helps organizations maintain a positive environmental reputation.",
            "Minimizes risks associated with non-compliance.",
            "Enhances operational efficiency by identifying waste reduction opportunities."
          ],
          procedure: [
            "Planning: Define the scope and objectives of the audit.",
            "Data Collection: Gather information on environmental policies, procedures, and performance.",
            "Evaluation: Assess compliance with applicable regulations and standards.",
            "Reporting: Provide a detailed audit report with findings and recommendations."
          ]
        }
      },
      {
        name: "Green Building Consultancy",
        id: 109,
        price:18000.00,
        description: "Expert guidance for designing and constructing sustainable, eco-friendly buildings.",
        image: e12, // Placeholder for an actual image variable
        path: "environmental-compliance",
        details: {
          overview: "Green Building Consultancy focuses on implementing sustainable practices in construction, such as energy efficiency, water conservation, and the use of eco-friendly materials. It aims to create environmentally responsible buildings that reduce carbon footprints.",
          benefits: [
            "Energy Efficiency: Reduces energy consumption through sustainable designs.",
            "Cost Savings: Lowers operational costs with efficient resource usage.",
            "Enhanced Reputation: Demonstrates commitment to sustainability."
          ],
          whyChoose: [
            "Customized solutions for achieving green building certifications like LEED or GRIHA.",
            "Promotes healthier living and working environments.",
            "Supports long-term cost savings through sustainable infrastructure."
          ],
          procedure: [
            "Consultation: Understand the client’s sustainability goals and project requirements.",
            "Design Strategy: Develop a green building plan focusing on energy, water, and materials efficiency.",
            "Implementation Support: Provide technical guidance during construction.",
            "Certification Assistance: Help in acquiring green building certifications."
          ]
        }
      },
      {
        name: "Solid Waste Management",
        id: 110,
        price:22000.00,
        description: "Solutions for efficient handling, treatment, and disposal of solid waste.",
        image: e13, // Placeholder for an actual image variable
        path: "environmental-compliance",
        details: {
          overview: "Solid Waste Management involves the collection, treatment, and disposal of solid waste in a way that minimizes environmental impact. It focuses on reducing, reusing, and recycling waste materials.",
          benefits: [
            "Reduces Pollution: Proper waste management prevents air, water, and soil contamination.",
            "Promotes Recycling: Encourages the reuse of materials, reducing the strain on natural resources.",
            "Improves Public Health: Prevents the spread of diseases caused by improper waste disposal."
          ],
          whyChoose: [
            "Customizable waste management solutions tailored to specific needs.",
            "Supports compliance with waste disposal regulations.",
            "Helps reduce waste disposal costs through efficient practices."
          ],
          procedure: [
            "Waste Assessment: Analyze the type and quantity of waste generated.",
            "Plan Development: Create a tailored waste management plan.",
            "Implementation: Set up collection, segregation, and treatment systems.",
            "Monitoring: Regular checks to ensure the effectiveness of the system."
          ]
        }
      }
    ]
  }
  ,
  {
    title: "Fire Safety and Security Solution",
    icon: "♻️",
    img: f1,
    path: "fire-safety",
    bgColor: "#6ce42b",
    subServices: [
      {
        name: "Fire Suppression Systems",
        id: 111,
        prcice:15000.00,
        description: "Automated systems designed to control and extinguish fires effectively.",
        image: f11, // Placeholder for an actual image variable
        path: "fire-safety",
        details: {
          overview: "Fire suppression systems are critical safety measures that control and extinguish fires through advanced technologies such as gas, foam, or water-based mechanisms. These systems are essential for protecting life and property in case of a fire.",
          benefits: [
            "Rapid Response: Quickly suppresses fires to minimize damage.",
            "Life Protection: Reduces the risk of injury or fatalities during fire incidents.",
            "Versatility: Suitable for various environments, including offices, industrial sites, and homes."
          ],
          whyChoose: [
            "Customized systems tailored to specific facility needs.",
            "Ensures compliance with fire safety regulations.",
            "Minimizes downtime and operational disruptions caused by fire incidents."
          ],
          procedure: [
            "Assessment: Evaluate the building layout and fire risks.",
            "System Design: Develop a suppression system based on the environment (e.g., wet, dry, or gas-based).",
            "Installation: Install suppression equipment such as sprinklers, nozzles, or extinguishing agents.",
            "Maintenance: Regular checks to ensure the system operates efficiently during emergencies."
          ]
        }
      },
      {
        name: "Fire Safety Audits",
        id: 112,
        price: 10000.00,
        description: "Comprehensive evaluations of fire safety measures in buildings and facilities.",
        image:f12, // Placeholder for an actual image variable
        path: "fire-safety",
        details: {
          overview: "Fire safety audits identify risks, assess preparedness, and ensure compliance with fire safety regulations. These audits focus on evaluating fire prevention systems, evacuation plans, and staff readiness.",
          benefits: [
            "Risk Reduction: Identifies and mitigates potential fire hazards.",
            "Compliance: Ensures adherence to fire safety laws and standards.",
            "Improved Safety: Enhances the overall safety of occupants and property."
          ],
          whyChoose: [
            "Helps create a safer environment by identifying vulnerabilities.",
            "Provides actionable recommendations for fire safety improvements.",
            "Prepares organizations for emergency situations with updated procedures."
          ],
          procedure: [
            "Initial Survey: Review existing fire safety measures and documentation.",
            "Inspection: Examine fire safety equipment, alarms, and evacuation routes.",
            "Risk Assessment: Identify potential fire hazards and evaluate risks.",
            "Report: Provide detailed findings with actionable improvement plans."
          ]
        }
      },
      {
        name: "Training and Drills",
        id: 116,
        price:8000.00,
        description: "Practical training programs and mock drills to prepare individuals for fire emergencies.",
        image: f13, // Placeholder for an actual image variable
        path: "fire-safety",
        details: {
          overview: "Training and drills equip individuals with the knowledge and skills to respond effectively during fire emergencies. These sessions include evacuation procedures, fire extinguisher usage, and safety protocols.",
          benefits: [
            "Enhanced Preparedness: Ensures employees know how to act during emergencies.",
            "Life-Saving Skills: Teaches the effective use of fire safety equipment.",
            "Compliance: Meets regulatory requirements for fire safety training."
          ],
          whyChoose: [
            "Builds confidence and reduces panic during emergencies.",
            "Improves overall workplace safety culture.",
            "Tailored training programs to suit specific needs and risks."
          ],
          procedure: [
            "Planning: Identify training objectives and participants.",
            "Program Delivery: Conduct training sessions covering fire safety basics, extinguisher use, and evacuation procedures.",
            "Drills: Perform mock fire drills to practice real-life scenarios.",
            "Evaluation: Assess the effectiveness of training and identify areas for improvement."
          ]
        }
      },
      {
        name: "Smoke and Heat Detection",
        id: 117,
        price:13000.00,
        description: "Advanced systems to detect smoke and heat for early fire warnings.",
        image: f14, // Placeholder for an actual image variable
        path: "fire-safety",
        details: {
          overview: "Smoke and heat detection systems provide early warnings of potential fires. These systems use sensors to detect smoke particles or temperature changes, ensuring timely alerts to prevent fire escalation.",
          benefits: [
            "Early Detection: Allows immediate action to prevent fire spread.",
            "Reduced Damage: Minimizes property loss by enabling quick responses.",
            "Safety Assurance: Enhances the overall safety of occupants and assets."
          ],
          whyChoose: [
            "State-of-the-art sensors for accurate and reliable detection.",
            "Integration with alarms and suppression systems for a complete safety solution.",
            "Ensures compliance with fire safety standards and codes."
          ],
          procedure: [
            "Site Survey: Assess the facility for optimal sensor placement.",
            "Installation: Install smoke and heat detection sensors in critical areas.",
            "Integration: Connect detection systems with alarms and suppression units.",
            "Testing & Maintenance: Regularly test and maintain the system for peak performance."
          ]
        }
      }
    ]
  }
  ,
  {
    title: "Compliance Management Solutions",
    icon: "🚰",
    img: c1,
    path: "compliance-management",
    bgColor: "#a6ee0a",
    subServices: [
      {
        name: "Renewable Energy Systems",
        id: 113,
        price:40000.00,
        description: "Design and implementation of sustainable energy systems like solar, wind, and hybrid setups.",
        image: c11, // Placeholder for the actual image variable
        path: "compliance-management",
        details: {
          overview: "Renewable energy systems help organizations adopt clean energy sources to reduce carbon footprints and ensure long-term cost savings. Popular options include solar panels, wind turbines, and hybrid energy solutions.",
          benefits: [
            "Eco-Friendly: Reduces greenhouse gas emissions.",
            "Cost-Effective: Lower energy costs in the long run.",
            "Sustainability: Supports environmental conservation goals."
          ],
          whyChoose: [
            "Expert design and installation of renewable energy systems.",
            "Customized solutions tailored to specific energy requirements.",
            "Seamless integration with existing energy systems."
          ],
          procedure: [
            "Assessment: Evaluate energy requirements and site feasibility.",
            "Design: Develop customized renewable energy solutions.",
            "Implementation: Install and integrate energy systems.",
            "Maintenance: Provide regular servicing for optimal performance."
          ]
        }
      },
      {
        name: "Air Quality Monitoring",
        id: 114,
        price:12000.00,
        description: "Real-time monitoring of indoor and outdoor air quality to ensure compliance with environmental standards.",
        image: c12, // Placeholder for the actual image variable
        path: "compliance-management",
        details: {
          overview: "Air quality monitoring involves measuring pollutants and particulate matter in the air to ensure healthy environments and regulatory compliance. This service is critical for industrial facilities, offices, and residential areas.",
          benefits: [
            "Improved Health: Protects individuals from air pollution.",
            "Compliance: Ensures adherence to air quality regulations.",
            "Data Insights: Provides actionable insights for reducing emissions."
          ],
          whyChoose: [
            "Advanced monitoring tools for accurate measurements.",
            "Expert analysis and reporting of air quality data.",
            "Tailored recommendations for improving air quality."
          ],
          procedure: [
            "Setup: Install air quality monitoring equipment in key areas.",
            "Data Collection: Gather real-time air quality data.",
            "Analysis: Evaluate pollutant levels and identify issues.",
            "Reporting: Provide detailed reports with improvement plans."
          ]
        }
      },
      {
        name: "Green Landscaping",
        id: 115,
        price:15000.00,
        description: "Eco-friendly landscaping solutions to enhance aesthetics and sustainability.",
        image:c13 , // Placeholder for the actual image variable
        path: "compliance-management",
        details: {
          overview: "Green landscaping integrates native plants, efficient irrigation systems, and sustainable practices to create environmentally friendly outdoor spaces. These designs prioritize biodiversity and resource conservation.",
          benefits: [
            "Aesthetic Appeal: Enhances property value and appearance.",
            "Sustainability: Reduces water usage and promotes biodiversity.",
            "Eco-Friendly: Minimizes environmental impact through sustainable practices."
          ],
          whyChoose: [
            "Expert landscaping designs tailored to specific environments.",
            "Integration of sustainable materials and practices.",
            "Ongoing maintenance and support for landscape health."
          ],
          procedure: [
            "Consultation: Understand client requirements and site conditions.",
            "Design: Develop customized green landscaping plans.",
            "Implementation: Execute landscaping projects with eco-friendly materials.",
            "Maintenance: Provide regular upkeep and sustainable practices."
          ]
        }
      }
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
