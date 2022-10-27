import React from 'react';
import BuzzerFirst from '../images/buzzerfirst.jpg';
import SIM from '../images/SIM800A-Quad.jpg';
import Cable from '../images/arduino-uno-r3-cable-.jpg';
import GPSIcon from '../images/gps-icon-cent.webp';
import LEDLight from '../images/led-light-.png';
import Board from '../images/breadboard-protoboard.jpg';

const IotComponentsUsed = () => {
  return (
    <>
      <div className="categoryTitle">
        <h1>Iot components used</h1>
      </div>

      <section className="hotDeals-area">
        <section className="cards-area">
          <div className="card">
            <div className="hotdeal-image">
              <img src={BuzzerFirst} className="card-img-top" alt="product" />
            </div>

            <div className="card-body">
              <h5 className="card-title">buzzer</h5>
              <div className="product-prices"></div>
            </div>
          </div>

          <div className="card">
            <div className="hotdeal-image">
              <img src={SIM} className="card-img-top" alt="product" />
            </div>

            <div className="card-body">
              <h5 className="card-title">GSM</h5>
              <div className="product-prices"></div>
            </div>
          </div>

          <div className="card">
            <div className="hotdeal-image">
              <img src={Cable} className="card-img-top" alt="product" />
            </div>

            <div className="card-body">
              <h5 className="card-title">Arduino</h5>
              <div className="product-prices"></div>
            </div>
          </div>

          <div className="card">
            <div className="hotdeal-image">
              <img src={GPSIcon} className="card-img-top" alt="product" />
            </div>

            <div className="card-body">
              <h5 className="card-title">GPS</h5>
              <div className="product-prices"></div>
            </div>
          </div>

          <div className="card">
            <div className="hotdeal-image">
              <img src={LEDLight} className="card-img-top" alt="product" />
            </div>

            <div className="card-body">
              <h5 className="card-title">LED</h5>
              <div className="product-prices"></div>
            </div>
          </div>

          <div className="card">
            <div className="hotdeal-image">
              <img src={Board} className="card-img-top" alt="product" />
            </div>

            <div className="card-body">
              <h5 className="card-title">Breadboard</h5>
              <div className="product-prices"></div>
            </div>
          </div>
        </section>
        <div className="text-center">
          <button className="shopButton viewAllButon">View All</button>
        </div>
      </section>
    </>
  );
};

export default IotComponentsUsed;
