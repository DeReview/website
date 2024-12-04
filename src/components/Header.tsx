import React, { useState } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
// import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (section: string) => {
    if (location.pathname !== '/') {
      // Navigate to home with the scrollTo query parameter
      navigate(`/?scrollTo=${section}`);
    } else {
      // If already on home, scroll directly
      scroller.scrollTo(section, {
        smooth: true,
        offset: -70,
      });
    }
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <RouterLink to="/" className="text-2xl font-bold text-primary">
          DeReview
        </RouterLink>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-primary" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
        <nav className="md:flex space-x-6 hidden">
          <RouterLink to="/" className="text-text hover:text-primary">
            Home
          </RouterLink>
          <button onClick={() => handleNavClick('about')} className="text-text hover:text-primary">
            About
          </button>
          <button onClick={() => handleNavClick('why')} className="text-text hover:text-primary">
            Why DeReview
          </button>
          <button onClick={() => handleNavClick('how-it-works')} className="text-text hover:text-primary">
            How It Works
          </button>
          <button onClick={() => handleNavClick('join')} className="text-text hover:text-primary">
            Join
          </button>
          <RouterLink to="/terms-of-service" className="text-text hover:text-primary">
            Terms
          </RouterLink>
          <RouterLink to="/privacy-policy" className="text-text hover:text-primary">
            Privacy
          </RouterLink>
          <button onClick={() => handleNavClick('buy-token')} className="text-accent font-semibold hover:text-primary">
            Buy DVW Token
          </button>
        </nav>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow">
          <nav className="flex flex-col space-y-2 px-6 py-4">
            <RouterLink to="/" className="text-text hover:text-primary" onClick={() => setIsOpen(false)}>
              Home
            </RouterLink>
            <button
              onClick={() => handleNavClick('about')}
              className="text-text hover:text-primary text-left"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('why')}
              className="text-text hover:text-primary text-left"
            >
              Why DeReview
            </button>
            <button
              onClick={() => handleNavClick('how-it-works')}
              className="text-text hover:text-primary text-left"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick('join')}
              className="text-text hover:text-primary text-left"
            >
              Join
            </button>
            <RouterLink
              to="/terms-of-service"
              className="text-text hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Terms
            </RouterLink>
            <RouterLink
              to="/privacy-policy"
              className="text-text hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Privacy
            </RouterLink>
            <button
              onClick={() => handleNavClick('buy-token')}
              className="text-accent font-semibold hover:text-primary text-left"
            >
              Buy DVW Token
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
