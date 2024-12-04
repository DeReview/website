import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20 text-gray-700">
      <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
      <div className="space-y-6">
        {/* <p>Last updated: [Month Day, Year]</p> */}

        <p>
          This Privacy Policy describes how DeReview ("we," "us," or "our") collects, uses, and discloses your personal information when you use our website and services (collectively, the "Service").
        </p>

        <h2 className="text-2xl font-semibold">1. Information We Collect</h2>

        <h3 className="text-xl font-semibold">1.1 Personal Information</h3>
        <p>
          We may collect personal information that you voluntarily provide to us when you register for an account, participate in interactive features of the Service, fill out a form, or otherwise communicate with us.
        </p>

        <h3 className="text-xl font-semibold">1.2 Usage Data</h3>
        <p>
          We may collect information that your browser sends whenever you visit our Service ("Usage Data"). This may include information such as your computer's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, and other diagnostic data.
        </p>

        <h2 className="text-2xl font-semibold">2. Use of Information</h2>
        <p>We use the collected data for various purposes:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>To provide and maintain our Service</li>
          <li>To notify you about changes to our Service</li>
          <li>To allow you to participate in interactive features</li>
          <li>To provide customer support</li>
          <li>To monitor the usage of our Service</li>
          <li>To detect, prevent, and address technical issues</li>
        </ul>

        <h2 className="text-2xl font-semibold">3. Disclosure of Information</h2>
        <p>We may disclose your personal information in the following situations:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Compliance with Laws:</strong> If required to do so by law or in response to valid requests by public authorities.
          </li>
          <li>
            <strong>Business Transactions:</strong> If we are involved in a merger, acquisition, or asset sale.
          </li>
          <li>
            <strong>Protection of Rights:</strong> To protect the rights, property, or safety of DeReview, our users, or others.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">4. Security of Data</h2>
        <p>
          The security of your data is important to us. We strive to use commercially acceptable means to protect your personal information but cannot guarantee its absolute security.
        </p>

        <h2 className="text-2xl font-semibold">5. Links to Other Sites</h2>
        <p>
          Our Service may contain links to other sites that are not operated by us. We have no control over and assume no responsibility for the content or privacy practices of any third-party sites.
        </p>

        <h2 className="text-2xl font-semibold">6. Children's Privacy</h2>
        <p>
          Our Service does not address anyone under the age of 13. We do not knowingly collect personal information from children under 13.
        </p>

        <h2 className="text-2xl font-semibold">7. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>

        <h2 className="text-2xl font-semibold">8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at{' '}
          <a href="mailto:contact@dereview.org" className="text-primary hover:underline">
            contact@dereview.org
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
