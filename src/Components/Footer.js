 import ProfilePic1 from '../images/kuar.png';
import ProfilePic2 from '../images/Joan.jpeg';
import ProfilePic3 from '../images/Nyawera.jpeg';
import ProfilePic4 from '../images/Benadate.jpeg';
import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <section id="staff" className="bg-white text-black text-center py-5">
        <div className="containers" id="id-meetus">
          <h2>Meet our Team</h2>
          <hr />
          <div className="row">
            <div className="col-md-3 mb-resp">
              <img
                src={ProfilePic1}
                alt="staff member one"/>
              <h4>Nyakuar Yiech</h4>
              <small>Software Developer</small>
              <li className="footerIcon">
                <a href='https://twitter.com/NyakuarY'> <FaTwitter /></a>
                <a href='https://www.linkedin.com/in/nyakuar-yiech'> <FaLinkedin /></a>
              </li>
          
            </div>
            <div className="col-md-3 mb-resp">
              <img
                src={ProfilePic2}
                alt="staff member two"/>
              <h4>Joan Muthoni</h4>
              <small> Software developer</small>
              <li className="footerIcon">
              <a href='https://twitter.com/JoanMut93389033'> <FaTwitter /></a>
                <a href='linkedin.com/in/joan-muthoni-7b8670233'> <FaLinkedin /></a>
              </li>
            </div>
            <div className="col-md-3 mb-resp">
              <img
                src={ProfilePic3}
                alt="staff member three"              />
              <h4>Nyawera Tut </h4>
              <small>Software developer </small>
              <li className="footerIcon">
              <a href='https://twitter.com/NyakuarY'> <FaTwitter /></a>
                <a href='https://www.linkedin.com/in/nyawera-tut/'> <FaLinkedin /></a>
             
              </li>
            </div>
            <div className="col-md-3">
              <img
                src={ProfilePic4}
                alt="staff member four"/>
              <h4>Atuheire Benadate</h4>
              <small>Software Developer</small>
              <li className="footerIcon">
              <a href='https://twitter.com/BenadateA'> <FaTwitter /></a>
                <a href='https://www.linkedin.com/in/atuheire-benadate-b66591233/'> <FaLinkedin /></a>
             
              </li>
            
            </div>
          </div>
        </div>
      </section>
      <div className="back">
        <section className="navigationList">
          <div className="products-nav">
            <h3>Products</h3>

            <a href="./">Different collection</a>
            <a href="./">Charger</a>

            <a href="./">Smart whistle </a>
          </div>

          <div className="policy-nav">
            <h3>Policy</h3>
            <a href="./">Terms & Conditions</a>
            <a href="./">Payment Methods</a>
            <a href="./">FAQ</a>
          </div>

          <div className="storeLocation-nav">
            <h3>Contact:</h3>

            <p>Nairobi Kenya</p>
            <p>info@isalaam.com</p>
            <p>123-456-789</p>

            <div className="socmedia-area">
              <a href="./">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="./">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="./">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="./">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </section>
      </div>

      <div className="crtext">
        <p>© 2022 by Isalaam</p>
      </div>
    </footer>
  );
};

export default Footer;
