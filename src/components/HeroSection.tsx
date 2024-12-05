import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-r from-primary to-primary-dark text-white">
      {/* Background overlay with opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: 'url("/assets/hero-bg.jpg")' }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Welcome to DeReview
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl italic mb-8 text-gray-100">
            Revolutionizing Trust with Decentralized Reviews
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#about" 
              className="px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition duration-300"
            >
              Learn More
            </a>
            <a 
              href="#join" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary transition duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
