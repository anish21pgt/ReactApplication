import React, { useEffect } from 'react';
import Footer from '../components/Footer.js';
import HeaderDefault from '../components/HeaderDefault.js';
import 'wowjs/css/libs/animate.css';
import { WOW } from 'wowjs';
import Basketball from '../images/basketball-ground.jpg';
import ResearchLab from '../images/lab1.jpg';
import SmartClass from '../images/smart-class.jpg';
const Facilities = () => {
  useEffect(() => {
    document.title = 'ABC | Facilities';
    const wow = new WOW();
    wow.init();
  }, []);

  const headingStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Times New Roman',
    textAlign: 'center',
    marginBottom: '80px',
  };

  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (

    <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
      <HeaderDefault />
      <div>
        <h2 style={headingStyle} className="wow slideInLeft" data-wow-duration="1s">
          Facilities
        </h2>

        <h2 className="wow slideInLeft" data-wow-duration="1s" style={{ textAlign: 'center' }}>
          Basketball Ground
        </h2>

        <div style={centerStyle} className="wow slideInLeft">
          <img
            src={Basketball}
            style={{ width: '1400px', height: '700px', marginBottom: '80px' }}
            alt="basketball-ground"
          />
        </div>

        <h2 className="wow slideInLeft" data-wow-duration="1s" style={{ textAlign: 'center' }}>
          Research Lab
        </h2>

        <div style={centerStyle} className="wow slideInLeft">
          <img
            src={ResearchLab}
            style={{ width: '1400px', height: '700px', marginBottom: '80px' }}
            alt="research-lab"
          />
        </div>

        <h2 className="wow slideInLeft" data-wow-duration="1s" style={{ textAlign: 'center' }}>
          Smart Classrooms
        </h2>

        <div style={centerStyle} className="wow slideInLeft">
          <img
            src={SmartClass}
            style={{ width: '1400px', height: '700px', marginBottom: '80px' }}
            alt="smart-classroom"
          />
        </div>


        <Footer />
      </div>
    </div>
  );
};

export default Facilities;
