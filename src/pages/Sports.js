import React, { useEffect } from 'react';
import Footer from '../components/Footer.js';
import HeaderDefault from '../components/HeaderDefault.js';
import 'wowjs/css/libs/animate.css';
import { WOW } from 'wowjs';
import Jump from '../images/longjump.jpg';
import Shoot from '../images/shooting.jpg';
import Disc from '../images/discusthrow.jpg';
const Facilities = () => {
    useEffect(() => {
        document.title = 'ABC | Sports';
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
                    Sports
                </h2>

                <h2 className="wow slideInLeft" data-wow-duration="1s" style={{ textAlign: 'center' }}>
                    Long Jump
                </h2>

                <div style={centerStyle} className="wow slideInLeft">
                    <img
                        src={Jump}
                        style={{ width: '1400px', height: '700px', marginBottom: '80px' }}
                        alt="basketball-ground"
                    />
                </div>

                <h2 className="wow slideInLeft" data-wow-duration="1s" style={{ textAlign: 'center' }}>
                    Shooting
                </h2>

                <div style={centerStyle} className="wow slideInLeft">
                    <img
                        src={Shoot}
                        style={{ width: '1400px', height: '700px', marginBottom: '80px' }}
                        alt="research-lab"
                    />
                </div>

                <h2 className="wow slideInLeft" data-wow-duration="1s" style={{ textAlign: 'center' }}>
                    Discus Throw
                </h2>

                <div style={centerStyle} className="wow slideInLeft">
                    <img
                        src={Disc}
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



