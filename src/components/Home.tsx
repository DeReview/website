import React, { useEffect } from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import WhySection from './WhySection';
import HowItWorksSection from './HowItWorksSection';
import JoinSection from './JoinSection';
import BuyTokenSection from './BuyTokenSection';
// import GetStartedSection from './GetStartedSection';
import StayConnectedSection from './StayConnectedSection';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollToSection = params.get('scrollTo');
    if (scrollToSection) {
      scroller.scrollTo(scrollToSection, {
        smooth: true,
        offset: -70,
      });
    }
  }, [location]);
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
