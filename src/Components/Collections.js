import BlueImage from '../images/blue2.PNG';
import GoldImage from '../images/Gold1.PNG';
import GreyImage from '../images/grey.PNG';
import RedImage from '../images/red1.PNG';
import React from 'react';

const Collections = () => {
  return (
    <div className='#'>
      <div className="categoryTitle" id="id-best">
        <h1>Our best Collections</h1>
      </div>
      
      <section className="products-area">
        <section className="cards-area">
          <div className="card">
            <div className="cardImage">
              <img src={BlueImage} className="card-img-top" alt="product" />
            </div>

            <div className="card-body">
              <h5 className="card-title">Smart Whistle Alarm </h5>
            </div>

            <a href="#" className="">
              
            </a>
          </div>
          <div className="card">
            <div className="cardImage">
              <img src={GoldImage} className="" alt="product" />
            </div>

            <div className="card-body">
              <h5 className="card-title">Smart Whistle Alarm </h5>
        
            </div>

            <a href="#" className="">
          
            </a>
          </div>

          <div className="card">
            <div className="cardImage">
              <img src={GreyImage} className="" alt="product" />
            </div>

            <div className="card-body">
              <h5 className="card-title">Smart Whistle Alarm </h5>
            </div>

            <a href="#" className="">
              
            </a>
          </div>

          <div className="card">
            <div className="cardImage">
              <img src={RedImage} className="" alt="product" />
            </div>

            <div className="card-body">
              <h5 className="card-title">Smart Whistle Alarm </h5>
            </div>

            <a href="#" className="">
              
            </a>
          </div>
        </section>
     
      </section>
  </div>
  );
};

export default Collections;
