import React from 'react';

const JoinSection: React.FC = () => {
  return (
    <section id="join" className="bg-indigo-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Join the Movement</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Be part of the revolution to redefine online reviews:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Consumers</h3>
            <p>Make smarter choices with access to genuine reviews.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Businesses</h3>
            <p>Build credibility through transparent customer feedback.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Developers</h3>
            <p>Contribute to our open-source protocol and shape the future of decentralized reviews.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
