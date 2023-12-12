import React, { useEffect } from 'react';
import Photo1 from "../images/fancy1.jpg";
import Photo2 from "../images/fancy2.jpg";
import Photo3 from "../images/fancy3.jpg";
import Photo4 from "../images/wonder1.jpg";
import Photo5 from "../images/wonder2.jpg";
import Photo6 from "../images/wonder3.jpg";
import Photo7 from "../images/quiz1.jpg";
import Photo8 from "../images/quiz2.jpg";
import Photo9 from "../images/quiz3.jpg";
import HeaderDefault from '../components/HeaderDefault';
import Footer from '../components/Footer';
import 'wowjs/css/libs/animate.css';
import { WOW } from 'wowjs';

const PhotoContainer = ({ photos, animationDuration }) => {
  return (
    <div
      className={`wow slideInLeft`}
      data-wow-duration={animationDuration || '1s'}
      style={{
        height: 'auto',
        width: '100%',
        border: '1px solid #ccc',
        overflow: 'hidden',
        margin: '20px',
        marginBottom: '140px',
      }}
    >
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo.src}
          alt={photo.alt}
          className={`wow fadeIn`}
          data-wow-duration={animationDuration || '1s'}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ))}
    </div>
  );
};


const Extracurricular = () => {
  useEffect(() => {
    document.title = 'ABC | Extracurricular Activities';
    const wow = new WOW();
    wow.init();
  }, []);

  const set1Photos = [
    { src: Photo1, alt: 'Photo 1' },
    { src: Photo2, alt: 'Photo 2' },
    { src: Photo3, alt: 'Photo 3' },
  ];

  const set2Photos = [
    { src: Photo4, alt: 'Photo 4' },
    { src: Photo5, alt: 'Photo 5' },
    { src: Photo6, alt: 'Photo 6' },
  ];

  const set3Photos = [
    { src: Photo7, alt: 'Photo 7' },
    { src: Photo8, alt: 'Photo 8' },
    { src: Photo9, alt: 'Photo 9' },
  ];

  const headingStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Times New Roman',
    textAlign: 'center',
    marginBottom: '80px',
    marginTop: '15px'
  };

  return (
    <>
      <HeaderDefault />
      <div style={{ textAlign: 'center', maxWidth: '1500px', margin: '0 auto' }}>
        <h2 style={headingStyle} className="wow slideInLeft" data-wow-duration="1s">
          Facilities
        </h2>
        <h2 className="wow slideInLeft" data-wow-duration="1s" style={{ textAlign: 'center' }}>
          Fancy Dress
        </h2>
        <PhotoContainer photos={set1Photos} animationDuration="1s" />
        <h2 className="wow slideInLeft" data-wow-duration="1s" style={{ textAlign: 'center' }}>
          Wonder From Waste
        </h2>
        <PhotoContainer photos={set2Photos} animationDuration="1s" />
        <h2 className="wow slideInLeft" data-wow-duration="1s" style={{ textAlign: 'center' }}>
          Science Quiz
        </h2>
        <PhotoContainer photos={set3Photos} animationDuration="1s" />
      </div>
      <Footer />
    </>
  );
};

const styles = `
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
  }

  h1 {
    color: #333;
  }
`;

const styleTag = document.createElement('style');
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);

export default Extracurricular;
