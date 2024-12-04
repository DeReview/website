import React from 'react';

const BuyTokenSection: React.FC = () => {
  return (
    <section id="buy-token" className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-text">Buy DVW Token</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-700">
          Be part of the future! Purchase DVW tokens now on the Osmosis network and join us in launching the DeReview chain. Transfer your tokens seamlessly via IBC once our chain is live.
        </p>
        <a
          href="#"
          className="bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent-dark transition duration-300"
        >
          Buy DVW Token
        </a>
      </div>
    </section>
  );
};

export default BuyTokenSection;
