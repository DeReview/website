import React from 'react';

const BuyTokenSection: React.FC = () => {
  const features = [
    {
      title: 'Utility Token',
      description: 'Power the DeReview ecosystem and participate in governance',
      icon: '/assets/icons/token.svg'
    },
    {
      title: 'Staking Rewards',
      description: 'Earn rewards by staking DVW tokens and securing the network',
      icon: '/assets/icons/staking.svg'
    },
    {
      title: 'Governance Rights',
      description: 'Vote on protocol upgrades and community proposals',
      icon: '/assets/icons/governance.svg'
    }
  ];

  return (
    <section id="buy-token" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-text">Buy DVW Token</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us in launching the DeReview chain. Purchase DVW tokens now and be part of the future of decentralized reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, _) => (
            <div 
              key={feature.title}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">
                <img 
                  src={feature.icon} 
                  alt={feature.title} 
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Token Details</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="font-semibold">Network:</span>
                  <span>Osmosis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="font-semibold">Token Type:</span>
                  <span>IBC Compatible</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="font-semibold">Total Supply:</span>
                  <span>1,000,000,000 DVW</span>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-right">
              <a
                href="https://app.osmosis.zone"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-full hover:bg-primary-dark transition duration-300"
              >
                <span>Buy on Osmosis</span>
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                  />
                </svg>
              </a>
              <p className="mt-4 text-sm text-gray-600">
                Tokens will be transferable via IBC once our chain launches
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyTokenSection;
