import React from 'react';
import AboutImage from '../images/about.png';

const AboutSection = () => {
  return (
    <div>
      <div className="mainBanner">
        <aside className="left">
          <h1>Smart Whistle Safety Alarm</h1>

          <p>
            Smart Whistle Activation - Blow the whistle or Press the button for
            2s · Phone call· SMS· Location tracking· Whistle sound· Sounding
            alarm.
          </p>

          <button className="shopButton">Order Now</button>
        </aside>
      </div>

      <section className="about-section">
        <aside className="left">
          <img src={AboutImage} alt="" />
        </aside>

        <aside className="right">
          <div className="aboutInfo">
            <h1>About Smart whistle</h1>

            <p>
              Smart Whistle,is a portable solution with integrated GPS / GSM
              mobile technology. Exact coordinates are recorded by GPS and
              transmitted via SMS or GSM / GPRS. In an emergency, by pressing
              the red Alarm-Button, help via direct voice call or SMS can be
              requested. The solution is configurable depending on the intended
              use. an intelligent device that will protect you and your loved
              ones from danger. Simple device for personal protection press the
              button for 2 seconds to activate the emergency call and send a
              notification of location on SMS In an emergency, you get immediate
              help from family and friend.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default AboutSection;
