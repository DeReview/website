import React from 'react';
import { UserGroupIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-text">About DeReview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In a world overflowing with information, trust is paramount. <strong>DeReview</strong> is a groundbreaking protocol that leverages blockchain technology to bring transparency, authenticity, and integrity back to online reviews.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We're on a mission to eliminate fake reviews and empower users with a platform they can trust, built on the foundation of decentralization and community governance.
            </p>
            <div className="mt-8 flex gap-4">
              <div className="flex items-center gap-2">
                <UserGroupIcon className="w-8 h-8 text-primary" />
                <span className="text-xl font-semibold">10K+ Users</span>
              </div>
              <div className="flex items-center gap-2">
                <ChatBubbleLeftRightIcon className="w-8 h-8 text-primary" />
                <span className="text-xl font-semibold">50K+ Reviews</span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <img 
              src="/assets/about-illustration.webp" 
              alt="DeReview Platform" 
              className="w-full max-w-lg mx-auto rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full z-[-1]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
