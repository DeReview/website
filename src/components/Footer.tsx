import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <p>
          <a href="https://github.com/DeReview/resources/blob/main/whitepaper.pdf" target="_blank" className="underline hover:text-gray-300">
            Whitepaper
          </a>{' '}
          |{' '}
          <a href="https://github.com/DeReview/resources/blob/main/tokenomics.pdf" target="_blank" className="underline hover:text-gray-300">
            Tokenomics
          </a>
        </p>
        <p className='mt-4'>
          © 2024 DeReview |{' '}
          <Link to="/privacy-policy" className="underline hover:text-gray-300">
            Privacy Policy
          </Link>{' '}
          |{' '}
          <Link to="/terms-of-service" className="underline hover:text-gray-300">
            Terms of Service
          </Link>
        </p>
        <p className="mt-4">DeReview—Where Every Voice Matters and Trust Is Reimagined.</p>
      </div>
    </footer>
  );
};

export default Footer;
