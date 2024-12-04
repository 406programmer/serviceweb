import { useState, useEffect } from "react";
import waste from "../images/waste.jpg";
import fire from "../images/fire.jpg";
import water from "../images/water.jpg";
import compliance from "../images/compliance.jpg";
import environment from "../images/environment.jpg";
import styles from "./Home.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


export default function Home() {
  const images = [
    { src: waste, alt: "Waste" },
    { src: fire, alt: "Fire" },
    { src: water, alt: "Water" },
    { src: compliance, alt: "Compliance" },
    { src: environment, alt: "Environment" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up interval for auto-sliding
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Clear interval when component unmounts or when currentIndex changes
    return () => clearInterval(interval);
  }, [currentIndex]); // Restart interval whenever currentIndex changes

  // Next image handler
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Previous image handler
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className={styles.main}>
      <div className={styles.imgContainer}>
        <div
          className={styles.slideContainer}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} className={styles.img} />
          ))}
        </div>
        <button className={styles.farrowButton} onClick={handleNext}>
          <IoIosArrowForward />
        </button>
        <button className={styles.barrowButton} onClick={handlePrev}>
          <IoIosArrowBack />
        </button>
      </div>
      {/* <div className={styles.textSection}>
  <div className={styles.textBox}>
    <h2>Welcome to Falcon eBiz</h2>
    <p>
      We specialize in transforming business services through the latest technological advances. Falcon eBiz, operating since May 2016, offers a wide range of services that help businesses grow and succeed in India.
    </p>
  </div>
  <div className={styles.textBox}>
    <h3>Our Commitment</h3>
    <p>
      We provide comprehensive support at every stage, ensuring businesses stay compliant and grow sustainably. Our goal is to assist entrepreneurs with legal and regulatory requirements, making it easier to start and manage a business.
    </p>
  </div>
  <div className={styles.textBox}>
    <h3>Business Intelligence</h3>
    <p>
      We help businesses understand their vendors, customers, and competitors for better financial planning and market positioning. Our services empower businesses with the knowledge they need to thrive.
    </p>
  </div>
</div> */}

  
    </main>
  );
}
