import React from 'react';

const GetStartedSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Get Started Today</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <a href="#" className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700">Sign Up</a>
          <a href="#" className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700">Download the App</a>
          <a href="#" className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
