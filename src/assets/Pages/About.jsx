import React from 'react';
import styles from './about.module.css'; // Import the CSS module
import aboutImage from '../images/about.jpg'; // Import the image

const About = () => {
  return (
    <div
      className={styles.aboutContainer}
      style={{ backgroundImage: `url(${aboutImage})` }}
    >
      <div className={styles.aboutOverlay}>
        <h1>About Us</h1>
        <p>
          We at Falcon eBiz believe in transforming the current business services with our knowledge of technological advances. Falcon eBiz, being an IT company since May 2016, is basically a whole package for businesses when it comes to business growth and analysis. We provide information about existing companies for a better understanding and awareness of businesses that are registered in India. We deal in a lot of business, analysis, and technological services that help smoothly run an organisation at affordable prices.
        </p>
        <p>
          We are dedicated to offering support at every stage to ensure the business remains compliant and continually growing. Our aim is to help the entrepreneur and make it easier for them to start their business on the legal and regulatory requirements, and be a partner throughout the business lifecycle.
        </p>
        <p>
          We are committed to assisting our customers to know who their vendors, customers, and competitors are, so that they have a better knowledge and financial understanding of a company they are dealing or competing with.
        </p>
      </div>
    </div>
  );
};

export default About;
