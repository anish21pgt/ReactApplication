import React, { useEffect, useState } from 'react';
import HeaderDefault from '../components/HeaderDefault.js';
import ImageCarousel from '../components/ImageCarousel.js';
import Footer from '../components/Footer.js';
import ContentLoading from '../components/ContentLoading';

const Home = () => {
  useEffect(() => {
    document.title = 'ABC | Home';
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <ContentLoading />
      ) : (
        <div>
          <HeaderDefault />
          <ImageCarousel />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;