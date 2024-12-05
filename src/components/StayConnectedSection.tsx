import React from 'react';
import { ChatBubbleLeftRightIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const StayConnectedSection: React.FC = () => {
  const socialLinks = [
    {
      name: 'Twitter',
      url: 'https://twitter.com/DeReviewOrg',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
      username: '@DeReviewOrg'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/dereview',
      icon: CodeBracketIcon,
      username: 'github.com/dereview'
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/dereview',
      icon: ChatBubbleLeftRightIcon,
      username: 'Join our community'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/derevieworg',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M22.05 1.577c-.393-.016-.784.08-1.117.235-.484.186-4.92 1.902-9.41 3.64-2.26.873-4.518 1.746-6.256 2.415-1.737.67-3.045 1.168-3.114 1.192-.46.16-1.082.362-1.61.984-.133.155-.267.354-.335.628s-.038.622.095.895c.265.547.714.773 1.244.976 1.76.564 3.58 1.102 5.087 1.608.556 1.96 1.09 3.927 1.618 5.89.174.394.553.54.944.544l-.002.02s.307.03.606-.042c.3-.07.677-.244 1.02-.565.377-.354 1.4-1.36 1.98-1.928l4.37 3.226.035.02s.484.34 1.192.388c.354.024.82-.044 1.22-.337.403-.294.67-.767.795-1.307.374-1.63 2.853-13.427 3.276-15.38l-.012.046c.296-1.1.187-2.108-.496-2.705-.342-.297-.736-.427-1.13-.444zm-.118 1.874c.027.025.025.025.002.027-.007-.002.08.118-.09.755l-.007.024-.005.022c-.432 1.997-2.936 13.9-3.27 15.356-.046.196-.065.182-.054.17-.1-.015-.285-.094-.3-.1l-7.48-5.525c2.562-2.467 5.182-4.7 7.827-7.08.468-.235.39-.96-.17-.972-.594.14-1.095.567-1.64.84-3.132 1.858-6.332 3.492-9.43 5.406-1.59-.553-3.177-1.012-4.767-1.572.2-.075 1.353-.552 2.967-1.18 1.66-.65 3.825-1.496 6.135-2.382 4.466-1.724 8.83-3.416 9.243-3.573.08-.032.16-.056.165-.063.01-.01.012-.014.012-.014-.076-.004-.15 0-.225.012z"/>
        </svg>
      ),
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
                  <link.icon className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform duration-300" />
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
