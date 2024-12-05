import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    // Set initial scroll state
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleNavClick = (section: string) => {
    if (location.pathname !== '/') {
      navigate(`/?scrollTo=${section}`);
    } else {
      scroller.scrollTo(section, {
        smooth: true,
        offset: -70,
        duration: 500
      });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: 'About', section: 'about' },
    { name: 'Why DeReview', section: 'why' },
    { name: 'How It Works', section: 'how-it-works' },
    { name: 'Join', section: 'join' },
  ];

  const isHomePage = location.pathname === '/';
  const shouldBeTransparent = isHomePage && !isScrolled;

  const headerClasses = `
    fixed w-full z-50 transition-all duration-300
    ${shouldBeTransparent
      ? 'bg-transparent py-4' 
      : 'bg-white/95 backdrop-blur-md shadow-md py-2'}
  `;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <RouterLink 
            to="/" 
            className="relative z-10 flex items-center space-x-2"
          >
            <img 
              src={shouldBeTransparent ? "/assets/logo.png" : "/assets/logo.png"} 
              alt="DeReview" 
              className="h-8 w-auto transition-all duration-300"
            />
          </RouterLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleNavClick(item.section)}
                className={`
                  text-sm font-medium transition-colors duration-300
                  ${false
                    ? 'text-white hover:text-white/80' 
                    : 'text-gray-600 hover:text-primary'}
                `}
              >
                {item.name}
              </button>
            ))}
            
            {/* CTA Button */}
            <button
              onClick={() => handleNavClick('buy-token')}
              className={`
                px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${shouldBeTransparent
                  ? 'bg-white text-primary hover:bg-gray-100'
                  : 'bg-primary text-white hover:bg-primary-dark'}
              `}
            >
              Buy DVW Token
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`
              lg:hidden p-2 rounded-md transition-colors duration-300
              ${shouldBeTransparent
                ? 'text-white hover:bg-white/10'
                : 'text-gray-600 hover:bg-gray-100'}
            `}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`
            lg:hidden fixed inset-x-0 top-[60px] p-4 bg-white shadow-lg transition-all duration-300 ease-in-out
            ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
          `}
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleNavClick(item.section)}
                className="text-gray-600 hover:text-primary text-sm font-medium text-left"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('buy-token')}
              className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors duration-300"
            >
              Buy DVW Token
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
