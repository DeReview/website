# DeReview Landing Page

Welcome to the **DeReview Landing Page** project—a modern, responsive, and pixel-perfect landing page built with React, Vite, TypeScript, and Tailwind CSS.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
- [Technologies Used](#technologies-used)
- [Color Scheme](#color-scheme)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

**DeReview** is a revolutionary protocol aiming to bring transparency, authenticity, and integrity back to online reviews using blockchain technology. This landing page serves as the front door to the DeReview platform, providing visitors with essential information, calls to action, and a seamless user experience.

---

## Features

- **Responsive Design**: Optimized for all devices, including desktops, tablets, and mobile phones.
- **Modern UI**: Clean and professional design with a cohesive color scheme.
- **Navigation**: Smooth scrolling to sections and a responsive hamburger menu for mobile devices.
- **Static Pages**: Includes comprehensive Privacy Policy and Terms of Service pages.
- **Future-Proof**: Reflects future plans for launching the DeReview chain and DVW token.
- **Accessibility**: Built with accessibility best practices in mind.

---

## Project Structure

```
de-review-landing-page/
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── favicon.ico
├── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── assets/
    │   └── logo.png
    ├── components/
    │   ├── Header.tsx
    │   ├── Footer.tsx
    │   ├── Home.tsx
    │   ├── TermsOfService.tsx
    │   ├── PrivacyPolicy.tsx
    │   ├── HeroSection.tsx
    │   ├── AboutSection.tsx
    │   ├── WhySection.tsx
    │   ├── HowItWorksSection.tsx
    │   ├── JoinSection.tsx
    │   ├── BuyTokenSection.tsx
    │   ├── GetStartedSection.tsx
    │   └── StayConnectedSection.tsx
```

---

## Getting Started

### Prerequisites

- **Node.js** (v14 or later)
- **npm** (v6 or later) or **yarn**

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/de-review-landing-page.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd de-review-landing-page
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

   or, if you're using yarn:

   ```bash
   yarn install
   ```

### Running the Development Server

Start the development server with the following command:

```bash
npm run dev
```

or, with yarn:

```bash
yarn dev
```

The application will be available at `http://localhost:3000` (or the next available port).

### Building for Production

To build the project for production, run:

```bash
npm run build
```

or, with yarn:

```bash
yarn build
```

This will create an optimized build in the `dist` folder.

---

## Technologies Used

- **React** with **TypeScript**: For building the user interface.
- **Vite**: As the build tool for fast development and optimized production builds.
- **Tailwind CSS**: For utility-first CSS styling.
- **React Router**: For client-side routing between pages.
- **React Scroll**: For smooth scrolling to sections.
- **Heroicons**: For icons used in the navigation menu.

---

## Color Scheme

The application uses a professional and cohesive color scheme:

- **Primary Color**: `#4F46E5` (Indigo 600)
- **Secondary Color**: `#10B981` (Emerald 500)
- **Accent Color**: `#F59E0B` (Amber 500)
- **Background Color**: `#F9FAFB` (Gray 50)
- **Text Color**: `#111827` (Gray 900)

These colors are defined in the `tailwind.config.js` file and used consistently throughout the application.

---

## Scripts

The following scripts are available in the `package.json` file:

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the application for production.
- **`npm run preview`**: Previews the production build locally.
- **`npm run lint`**: Lints the code for errors and warnings (if ESLint is configured).

---

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the repository**.
2. **Create a new branch**:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit your changes**:

   ```bash
   git commit -m 'Add some feature'
   ```

4. **Push to the branch**:

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request**.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Additional Information

### Future Plans

- **DeReview Chain**: Plans are underway to launch the DeReview chain (`dviewd`) in the Cosmos ecosystem using Ignite CLI.
- **DVW Token**: Before launching the DeReview chain, a DVW token will be deployed on the Osmosis network. After the chain launch, tokens can be transferred via IBC to the DeReview chain.
- **Buy DVW Token**: A "Buy DVW Token" button is prominently featured on the landing page for users to participate early.

### Accessibility

- **ARIA Labels**: Interactive elements include ARIA labels where necessary to improve accessibility.
- **Keyboard Navigation**: The site supports keyboard navigation for users who rely on it.

### SEO Optimization

- **Meta Tags**: Important meta tags are included for better search engine ranking.
- **Performance**: Images and assets are optimized to reduce load times.

---

## Contact

- **Email**: [contact@dereview.org](mailto:contact@dereview.org)
- **Twitter**: [@DeReviewOrg](https://twitter.com/DeReviewOrg)
- **GitHub**: [github.com/dereview](https://github.com/dereview)

---

Thank you for your interest in DeReview! If you have any questions or need further assistance, please don't hesitate to reach out.
