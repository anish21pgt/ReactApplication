import React, { useEffect } from 'react';
import Footer from "../components/Footer.js";
import HeaderDefault from "../components/HeaderDefault.js";
import 'wowjs/css/libs/animate.css';
import { WOW } from 'wowjs';

const About = () => {
  useEffect(() => {
    document.title = 'ABC | About ABC';
    const wow = new WOW();
    wow.init();
  }, []);

  const headingStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
    fontFamily: 'Times New Roman',
    textAlign: 'center',
  };

  const paragraphStyle = {
    fontSize: '1.2em',
    lineHeight: '1.6',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const listStyle = {
    fontSize: '1.2em',
    lineHeight: '1.6',
    marginBottom: '10px',
    textAlign: 'center',
    listStyle: 'none',
  };

  return (
    <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
      <HeaderDefault />
      <div>
        <h2 style={headingStyle} className="wow slideInLeft" data-wow-duration="1s">
          About Us
        </h2>
        <p style={paragraphStyle} className="wow fadeInUp" data-wow-duration="1s">
          ABC International School is dedicated to providing high-quality education
          and fostering a nurturing environment for students of all ages. Our mission
          is to empower students to reach their full potential and become global
          citizens equipped with the skills and knowledge necessary for success.
        </p>

        <h2 style={headingStyle} className="wow slideInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
          Our Mission
        </h2>
        <p style={paragraphStyle} className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
          At ABC International School, we strive to create a dynamic learning
          community where students are inspired to explore, innovate, and excel.
          Our mission is to provide a comprehensive education that nurtures
          intellectual, social, and emotional growth, preparing students to make a
          positive impact in the world.
        </p>
        <h2 style={headingStyle} className="wow slideInLeft" data-wow-duration="1s">Our Vision</h2>
        <p style={paragraphStyle} className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
          Our vision is to be a leading institution in shaping the future of
          education. We envision a school where diversity is celebrated, curiosity
          is encouraged, and each student is supported in their unique journey of
          learning and self-discovery.
        </p>

        <h2 style={headingStyle} className="wow slideInLeft" data-wow-duration="1s">Core Values</h2>
        <ul style={listStyle} className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
          <li><b>Excellence:</b> Striving for the highest standards in education.</li>
          <li><b>Integrity:</b> Fostering honesty, respect, and ethical behavior.</li>
          <li style={{ paddingLeft: '102px' }}><b>Inclusivity:</b> Embracing diversity and creating an inclusive environment.</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default About;

