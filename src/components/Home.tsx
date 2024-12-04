import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import WhySection from './WhySection';
import HowItWorksSection from './HowItWorksSection';
import JoinSection from './JoinSection';
import BuyTokenSection from './BuyTokenSection';
// import GetStartedSection from './GetStartedSection';
import StayConnectedSection from './StayConnectedSection';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhySection />
      <HowItWorksSection />
      <JoinSection />
      <BuyTokenSection />
      {/* <GetStartedSection /> */}
      <StayConnectedSection />
    </>
  );
};

export default Home;
