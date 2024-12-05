import React from 'react';
import { 
  PencilSquareIcon, 
  CubeTransparentIcon, 
  CurrencyDollarIcon, 
  UserGroupIcon,
  // ChevronRightIcon 
} from '@heroicons/react/24/solid';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Share Your Experience',
      description: 'Write a review about a product, service, or experience.',
      Icon: PencilSquareIcon
    },
    {
      number: '02',
      title: 'Blockchain Integration',
      description: 'Your review is encrypted and stored on the blockchain.',
      Icon: CubeTransparentIcon
    },
    {
      number: '03',
      title: 'Earn Rewards',
      description: 'Get incentivized with tokens for your genuine contributions.',
      Icon: CurrencyDollarIcon
    },
    {
      number: '04',
      title: 'Build Community Trust',
      description: 'Help others make informed decisions based on authentic feedback.',
      Icon: UserGroupIcon
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our community and start contributing to a more transparent review ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative group"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 left-full w-full h-0.5 bg-gray-200 transform -translate-y-1/2 z-0">
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full" />
                </div>
              )}

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative z-10">
                <div className="flex items-start space-x-4">
                  <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                  <div>
                    <div className="w-12 h-12 mb-4">
                      <step.Icon 
                        className="w-full h-full text-primary group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 text-center">
          <a 
            href="#join" 
            className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-full hover:bg-primary-dark transition duration-300"
          >
            <span>Get Started Now</span>
            <ChevronRightIcon className="w-5 h-5" />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default HowItWorksSection;
