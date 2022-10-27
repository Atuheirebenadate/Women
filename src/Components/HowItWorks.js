import React from 'react';

import BlueImage from '../images/blue2.PNG';
import SosRemove from '../images/sos-removeb.png';
import Calling from '../images/calling.png';
import AdBuzzer from '../images/Adbuzzer.jpg';
import LedLight from '../images/LED-light.png';
import GPSNav from '../images/gps-map-navigation-pointers-.jpg';

const HowItWorks = () => {
  return (
    <div className="backss">
      <div className="categoryTitle" id="id-works">
        <h1>How it works</h1>
      </div>

      <div className="categories-area">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Sos</h5>
                <p className="card-text">
                  press the Power button five times in quick succession and{' '}
                  <br />
                  your phone will automatically send a message with your current
                  location to your emergency contacts..{' '}
                </p>
                <div className="shop-area">
                  <aside className="left">
                    <button className="shopButton shopCatButton">View</button>
                  </aside>
                  <aside className="right">
                    <div className="categoryImage">
                      <img src={SosRemove} alt="..." />
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Sends call</h5>
                <p className="card-text">
                  The alarm will call 3 phone numbers (set up upon
                  subscription), one by one, until a call is answered.
                </p>
                <div className="shop-area">
                  <aside className="left">
                    <button className="shopButton shopCatButton">View</button>
                  </aside>

                  <aside className="right">
                    <div className="categoryPhoneImage">
                      <img
                        src={Calling}
                        height="100px"
                        width="100px"
                        alt="..."
                      />
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Buzzer sound</h5>
                <p className="card-text">
                  The main function of this is to convert the signal from audio
                  to sound. Generally, it is powered through DC voltage and used
                  in timers, alarm devices,
                </p>
                <div className="shop-area">
                  <aside className="left">
                    <button className="shopButton shopCatButton">View</button>
                  </aside>
                  <aside className="right">
                    <div className="categoryImage" height="100px" width="100px">
                      <img src={AdBuzzer} alt="..." />
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">LED light</h5>
                <p className="card-text">
                  A light-emitting diode is a semiconductor device that emits
                  light when an electric current flows through it.It produces
                  light when turned on
                </p>
                <div className="shop-area">
                  <aside className="left">
                    <button className="shopButton shopCatButton">View</button>
                  </aside>
                  <aside className="right">
                    <div className="categoryImage" height="100px" width="100px">
                      <img src={LedLight} alt="..." />
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">GPS</h5>
                <p className="card-text">
                  GPS location of tracker can be viewed online and requested via
                  SMS text message by authorized phone numbers{' '}
                </p>
                <div className="shop-area">
                  <aside className="left">
                    <button className="shopButton shopCatButton">View</button>
                  </aside>
                  <aside className="right">
                    <div className="categoryImage">
                      <img
                        src={GPSNav}
                        height="100px"
                        width="100px"
                        alt="..."
                      />
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"> Smart whistle</h5>
                <p className="card-text">
                  Take a leap and wear your digital essential
                </p>
                <div className="shop-area">
                  <aside className="left">
                    <button className="shopButton shopCatButton">View</button>
                  </aside>
                  <aside className="right">
                    <div className="categoryImage">
                      <img src={BlueImage} alt="..." />
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
