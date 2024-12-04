import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link as ScrollLink } from 'react-scroll';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <a href="/" className="text-2xl font-bold text-primary">
          <img src="/assets/logo.png" alt="DeReview" className="h-10" />
        </a>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-primary" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
        <nav className={`md:flex space-x-6 hidden`}>
          <ScrollLink to="about" className="text-text hover:text-primary cursor-pointer">
            About
          </ScrollLink>
          <ScrollLink to="why" className="text-text hover:text-primary cursor-pointer">
            Why DeReview
          </ScrollLink>
          <ScrollLink to="how-it-works" className="text-text hover:text-primary cursor-pointer">
            How It Works
          </ScrollLink>
          <ScrollLink to="join" className="text-text hover:text-primary cursor-pointer">
            Join
          </ScrollLink>
          <ScrollLink to="contact" className="text-text hover:text-primary cursor-pointer">
            Contact
          </ScrollLink>
          <ScrollLink to="buy-token" className="text-accent font-semibold hover:text-primary cursor-pointer">
            Buy DVW Token
          </ScrollLink>
        </nav>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow">
          <nav className="flex flex-col space-y-2 px-6 py-4">
            <ScrollLink to="about" className="text-text hover:text-primary cursor-pointer" onClick={() => setIsOpen(false)}>
              About
            </ScrollLink>
            <ScrollLink to="why" className="text-text hover:text-primary cursor-pointer" onClick={() => setIsOpen(false)}>
              Why DeReview
            </ScrollLink>
            <ScrollLink to="how-it-works" className="text-text hover:text-primary cursor-pointer" onClick={() => setIsOpen(false)}>
              How It Works
            </ScrollLink>
            <ScrollLink to="join" className="text-text hover:text-primary cursor-pointer" onClick={() => setIsOpen(false)}>
              Join
            </ScrollLink>
            <ScrollLink to="contact" className="text-text hover:text-primary cursor-pointer" onClick={() => setIsOpen(false)}>
              Contact
            </ScrollLink>
            <ScrollLink to="buy-token" className="text-accent font-semibold hover:text-primary cursor-pointer" onClick={() => setIsOpen(false)}>
              Buy DVW Token
            </ScrollLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
