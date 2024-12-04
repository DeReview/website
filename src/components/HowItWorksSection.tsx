import React from 'react';

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <ol className="list-decimal list-inside max-w-2xl mx-auto text-lg space-y-4">
          <li><strong>Share Your Experience</strong>: Write a review about a product, service, or experience.</li>
          <li><strong>Blockchain Integration</strong>: Your review is encrypted and stored on the blockchain.</li>
          <li><strong>Earn Rewards</strong>: Get incentivized with tokens for your genuine contributions.</li>
          <li><strong>Build Community Trust</strong>: Help others make informed decisions based on authentic feedback.</li>
        </ol>
      </div>
    </section>
  );
};

export default HowItWorksSection;
