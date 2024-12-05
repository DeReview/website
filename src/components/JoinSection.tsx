import React from 'react';

const JoinSection: React.FC = () => {
  const roles = [
    {
      title: 'Consumers',
      description: 'Make smarter choices with access to genuine reviews.',
      icon: '/assets/icons/consumer.svg',
      benefits: ['Access verified reviews', 'Earn tokens for participation', 'Make informed decisions']
    },
    {
      title: 'Businesses',
      description: 'Build credibility through transparent customer feedback.',
      icon: '/assets/icons/business.svg',
      benefits: ['Build trust with customers', 'Access authentic feedback', 'Improve services']
    },
    {
      title: 'Developers',
      description: 'Contribute to our open-source protocol and shape the future.',
      icon: '/assets/icons/developer.svg',
      benefits: ['Access open-source code', 'Build on our protocol', 'Shape the ecosystem']
    }
  ];

  return (
    <section id="join" className="py-20 bg-gradient-to-br from-primary/95 to-primary-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join the Movement</h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            Be part of the revolution to redefine online reviews and create a more transparent digital ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div 
              key={role.title}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6">
                <img 
                  src={role.icon} 
                  alt={role.title} 
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">{role.title}</h3>
              <p className="text-gray-200 text-center mb-6">{role.description}</p>
              <ul className="space-y-3">
                {role.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <svg 
                      className="w-5 h-5 text-green-400" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center space-x-2 bg-white text-primary px-8 py-4 rounded-full hover:bg-gray-100 transition duration-300"
          >
            <span>Start Contributing</span>
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
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
