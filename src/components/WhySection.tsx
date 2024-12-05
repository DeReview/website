import React from 'react';
import { 
  LockClosedIcon, 
  UsersIcon, 
  CircleStackIcon,
  ShieldCheckIcon 
} from '@heroicons/react/24/solid';

const WhySection: React.FC = () => {
  return (
    <section id="why" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Why DeReview?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="mb-6">
              <LockClosedIcon 
                className="w-16 h-16 mx-auto text-primary group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Immutable and Transparent</h3>
            <p className="text-gray-600 text-center">Every review is recorded on the blockchain, ensuring it cannot be altered or deleted.</p>
          </div>
          
          <div className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="mb-6">
              <CircleStackIcon 
                className="w-16 h-16 mx-auto text-primary group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Decentralized Platform</h3>
            <p className="text-gray-600 text-center">No central authority means no censorship or manipulation—just honest, unbiased feedback.</p>
          </div>
          
          <div className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="mb-6">
              <UsersIcon 
                className="w-16 h-16 mx-auto text-primary group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Community-Driven</h3>
            <p className="text-gray-600 text-center">Users are at the heart of DeReview. Contribute, verify, and benefit from a collaborative ecosystem.</p>
          </div>
          
          <div className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="mb-6">
              <ShieldCheckIcon 
                className="w-16 h-16 mx-auto text-primary group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Secure and Private</h3>
            <p className="text-gray-600 text-center">Advanced cryptographic protocols protect your data and ensure secure interactions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
