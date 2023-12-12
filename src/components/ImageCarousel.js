import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'wowjs/css/libs/animate.css';
import { WOW } from 'wowjs';

const NextArrow = (props) => (
  <div {...props} style={{ ...props.style, display: 'block', right: '0', zIndex: 1, paddingRight: '870px', paddingTop: '755px' }}>
  </div>
);

const PrevArrow = (props) => (
  <div {...props} style={{ ...props.style, display: 'block', left: '0', zIndex: 1, paddingLeft: '870px', paddingTop: '755px' }}>
  </div>
);

const ImageCarousel = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [
    {
      id: 1,
      src: require('../images/carousel-image1.jpg'),
      text: '"Today a reader, tomorrow a leader. Celebrating International Readers Day"',
    },
    {
      id: 2,
      src: require('../images/carousel-image2.jpg'),
      text: '"Empowering Rural Minds: Education for Every Child"',
    },
    {
      id: 3,
      src: require('../images/carousel-image3.jpg'),
      text: '"Unleashing Talent, Creating Memories: Annual Day Delight"',
    },
    {
      id: 4,
      src: require('../images/carousel-image4.jpg'),
      text: '"Strive, Play, Win: Unleashing the Spirit of Sports Day"',
    },
  ];


  return (
    <>
      <div className='p-3'></div>
      <h1 style={{ textAlign: 'center', fontFamily: 'Times New Roman', marginTop: '40px' }}>Welcome to ABC International School !</h1>
      <div>
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id} className="wow fadeIn" data-wow-duration="1s">
              <div style={{ position: 'relative', width: '100%', height: '800px', overflow: 'hidden' }}>
                <img src={item.src} alt={`Slide ${item.id}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '20px', color: '#fff', textAlign: 'center', background: 'rgba(0, 0, 0, 0.5)' }}>
                  <h2>{item.text}</h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ImageCarousel;


