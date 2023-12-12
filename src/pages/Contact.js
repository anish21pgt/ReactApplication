import Header from "../components/HeaderDefault";
import Footer from "../components/Footer";
import 'wowjs/css/libs/animate.css';
import { WOW } from 'wowjs';
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = 'ABC | Contact';
    const wow = new WOW();
    wow.init();
  }, []);
  return (
    <>
      <Header />
      <div className="section" style={{ marginBottom: '235px' }}>
        <h1 style={{ textAlign: 'center', fontFamily: 'Times New Roman' }}>Contact Us !</h1>
        <div className="p-5"></div>

        <div className="address-container">
          <div className="address-block" >
            <p className="address-title"><b>Address:</b></p>
            <p className="address-line">ABC International School</p>
            <p className="address-line">12/3 Main Street</p>
            <p className="address-line">T Nagar, Chennai - 600 017</p>
          </div>

        </div>

        <div className="p-5"></div>
        <div className="p-5"></div>

        <div className="feedback-container">
          <div className="address-block">
            <p className="address-title"><b>For any queries or feedbacks reach out to us !</b></p>
            <p className="address-line"><b>Email:</b> queries@abcschool.com</p>
            <p className="address-line"><b>Contact Number (Toll Free):</b> 1800-123-456</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;