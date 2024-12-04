import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-text">About DeReview</h2>
        <p className="text-center max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          In a world overflowing with information, trust is paramount. <strong>DeReview</strong> is a groundbreaking protocol that leverages blockchain technology to bring transparency, authenticity, and integrity back to online reviews. We're on a mission to eliminate fake reviews and empower users with a platform they can trust.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
