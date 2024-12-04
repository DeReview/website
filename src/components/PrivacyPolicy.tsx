import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
      <div className="text-gray-700 leading-relaxed space-y-6">
        <p>Last updated: [Date]</p>

        <h2 className="text-2xl font-semibold">1. Introduction</h2>
        <p>
          Your privacy is important to us. This policy explains how we handle and use your personal information.
        </p>

        {/* Add more sections as needed */}

        <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
        <p>
          We may collect information about you when you use our site, including but not limited to your name and email address.
        </p>

        {/* Continue with additional privacy details */}

      </div>
    </div>
  );
};

export default PrivacyPolicy;
