import React from 'react';

const WhySection: React.FC = () => {
  return (
    <section id="why" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Why DeReview?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow rounded">
            <h3 className="text-xl font-semibold mb-2">Immutable and Transparent</h3>
            <p>Every review is recorded on the blockchain, ensuring it cannot be altered or deleted.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <h3 className="text-xl font-semibold mb-2">Decentralized Platform</h3>
            <p>No central authority means no censorship or manipulation—just honest, unbiased feedback.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <h3 className="text-xl font-semibold mb-2">Community-Driven</h3>
            <p>Users are at the heart of DeReview. Contribute, verify, and benefit from a collaborative ecosystem.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <h3 className="text-xl font-semibold mb-2">Secure and Private</h3>
            <p>Advanced cryptographic protocols protect your data and ensure secure interactions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
