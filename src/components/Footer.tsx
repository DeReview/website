import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigation = {
    main: [
      { name: 'About', href: '#about' },
      { name: 'How it Works', href: '#how-it-works' },
      { name: 'Buy Token', href: '#buy-token' },
      { name: 'Join', href: '#join' }
    ],
    resources: [
      { name: 'Whitepaper', href: 'https://github.com/DeReview/resources/blob/main/whitepaper.pdf' },
      { name: 'Tokenomics', href: 'https://github.com/DeReview/resources/blob/main/tokenomics.pdf' },
      { name: 'Documentation', href: 'https://docs.dereview.org' },
      { name: 'GitHub', href: 'https://github.com/dereview' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
      // { name: 'Cookie Policy', href: '/cookie-policy' }
    ],
    social: [
      { name: 'Twitter', href: 'https://twitter.com/DeReviewOrg', icon: '/assets/icons/twitter.svg' },
      { name: 'GitHub', href: 'https://github.com/dereview', icon: '/assets/icons/github.svg' },
      { name: 'Discord', href: 'https://discord.gg/dereview', icon: '/assets/icons/discord.svg' },
      { name: 'Telegram', href: 'https://t.me/dereview', icon: '/assets/icons/telegram.svg' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <img src="/assets/logo-white.png" alt="DeReview" className="h-8 w-auto mb-6" />
            <p className="text-gray-400 text-sm mb-6">
              Revolutionizing trust with decentralized reviews. Building the future of authentic feedback.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <img src={item.icon} alt={item.name} className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and announcements.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} DeReview. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
