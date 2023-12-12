import React, { useEffect } from 'react';
import 'wowjs/css/libs/animate.css';
import { WOW } from 'wowjs';
import Principal from '../images/principal.jpg';
import HeaderDefault from './HeaderDefault';
import Footer from './Footer';

const Message = () => {
  useEffect(() => {
    document.title = 'ABC | Principal\'s message';
  }, []);

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const paragraphStyle = {
    fontFamily: 'Times New Roman',
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
  };

  const sectionStyle = {
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const imgStyle = {
    width: '300px',
    height: '300px',
  };

  const headingStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Times New Roman',
    textAlign: 'center',
    marginBottom: '80px',
  };

  return (
    <>
      <HeaderDefault />
      <div className="section" style={sectionStyle}>
        <h2 style={headingStyle} className="wow slideInLeft" data-wow-duration="1s">
          Principal's Message
        </h2>
        <img src={Principal} alt="Principal" className="wow slideInLeft" data-wow-duration="1s" style={{ ...imgStyle, justifyContent: 'center', alignItems: 'center' }} />

        {[1, 2, 3, 4, 5].map((index) => (
          <p key={index} className="wow slideInRight" data-wow-duration="1s" style={{ ...paragraphStyle, opacity: 1 }}>

            {index === 1 && "Welcome to ABC International School !"}
            {index === 2 && "At ABC School, we're more than just an institution; we're a thriving community committed to academic excellence and personal growth. Our principles revolve around fostering collaboration, creating a welcoming environment, and celebrating the achievements of each student."}
            {index === 3 && "Explore our website to stay updated on the latest school news, academic updates, and upcoming events. Whether you're a seasoned student or new to our community, there's a place for everyone to thrive and create lasting memories."}
            {index === 4 && "Join us on this exciting journey of learning, growth, and shared experiences. If you have any questions or are interested in becoming a part of our school community, feel free to reach out."}
            {index === 5 && "Thank you for visiting, and we look forward to creating memorable moments together!"}
          </p>
        ))}
        <div className='p-5'></div>
      </div>
      <Footer />
    </>
  );
};

export default Message;
