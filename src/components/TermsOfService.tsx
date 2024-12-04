import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-8 text-center">Terms of Service</h1>
      <div className="text-gray-700 leading-relaxed space-y-6">
        <p>Last updated: [Date]</p>

        <h2 className="text-2xl font-semibold">1. Introduction</h2>
        <p>
          Welcome to DeReview. By accessing our website, you agree to comply with and be bound by the following terms and conditions.
        </p>

        {/* Add more sections as needed */}

        <h2 className="text-2xl font-semibold">2. Use of the Site</h2>
        <p>
          You agree to use the site only for lawful purposes and in a way that does not infringe the rights of others.
        </p>

        {/* Continue with additional terms */}

      </div>
    </div>
  );
};

export default TermsOfService;
