import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center bg-gradient-to-r from-primary to-primary-dark text-white">
      {/* Background overlay with opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: 'url("/assets/hero-bg.webp")' }}
      />
      
      {/* Content container with negative margin to account for header height */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-8 leading-tight animate-fade-in">
            Welcome to DeReview
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl italic mb-12 text-gray-100 animate-fade-in delay-200">
            Revolutionizing Trust with Decentralized Reviews
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in delay-300">
            <a 
              href="#about" 
              className="px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition duration-300 text-lg"
            >
              Learn More
            </a>
            {/* <a 
              href="#join" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary transition duration-300 text-lg"
            >
              Get Started
            </a> */}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white opacity-75 hover:opacity-100 transition-opacity">
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
