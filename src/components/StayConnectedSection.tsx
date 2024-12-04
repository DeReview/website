import React from 'react';

const StayConnectedSection: React.FC = () => {
  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-text">Stay Connected</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-700">
          Join us as we build the DeReview chain using the Cosmos ecosystem with Ignite CLI. Be among the first to know about updates, token sales, and more.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <a href="https://twitter.com/DeReviewOrg" target="_blank" className="text-primary hover:underline">
            <strong>Twitter:</strong> @DeReviewOrg
          </a>
          <a href="https://github.com/dereview" target="_blank" className="text-primary hover:underline">
            <strong>GitHub:</strong> github.com/dereview
          </a>
          <a href="mailto:contact@dereview.org" className="text-primary hover:underline">
            <strong>Email:</strong> contact@dereview.org
          </a>
        </div>
      </div>
    </section>
  );
};

export default StayConnectedSection;
