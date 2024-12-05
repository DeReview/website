import React from 'react';

const StayConnectedSection: React.FC = () => {
  const socialLinks = [
    {
      name: 'Twitter',
      url: 'https://twitter.com/DeReviewOrg',
      icon: '/assets/icons/twitter.svg',
      username: '@DeReviewOrg'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/dereview',
      icon: '/assets/icons/github.svg',
      username: 'github.com/dereview'
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/dereview',
      icon: '/assets/icons/discord.svg',
      username: 'Join our community'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/dereview',
      icon: '/assets/icons/telegram.svg',
      username: 'Join our channel'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stay Connected</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Join us as we build the DeReview chain using the Cosmos ecosystem. Be among the first to know about updates, token sales, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <img 
                    src={link.icon} 
                    alt={link.name} 
                    className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="font-semibold mb-2">{link.name}</h3>
                  <p className="text-gray-400">{link.username}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-300 mb-6">Get the latest updates directly in your inbox</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-400">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayConnectedSection;
