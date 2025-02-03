# Catalyst Tracker Tool

A Next.js application for tracking Project Catalyst proposals and wallet data with dynamic dashboards, automated integrations, and more.

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Dynamic Dashboard:** Visualize Project Catalyst proposals and wallet data.
- **API Endpoints:** Next.js API routes to fetch and process data.
- **Automation:** GitHub Actions for CI/CD, automated testing, and data synchronization.
- **External Integrations:** Connect with Project Catalyst API and Google Sheets API.
- **Responsive Design:** Built with Next.js and modern UI components.

## Folder Structure

```plaintext
nextjs-catalyst-tool/
├── .github/
│   └── workflows/
│       ├── ci-cd.yml
│       └── automation.yml
├── public/
│   ├── images/
│   └── assets/
├── src/
│   ├── components/
│   ├── pages/
│   │   ├── api/
│   │   ├── index.js
│   │   ├── proposals.js
│   │   └── wallets.js
│   ├── lib/
│   ├── hooks/
│   └── styles/
├── scripts/
├── tests/
├── .env.local
├── next.config.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (>=14.x)
- npm or yarn
- A GitHub account (for CI/CD integration)

### Installation

1. **Clone the repository:**

~~~bash
git clone https://github.com/yourusername/nextjs-catalyst-tool.git
cd nextjs-catalyst-tool
~~~

2. **Install dependencies:**

Using npm:
~~~bash
npm install
~~~

Or using yarn:
~~~bash
yarn install
~~~

3. **Setup Environment Variables:**

Create a `.env.local` file in the root directory and add your environment variables. See the [Environment Variables](#environment-variables) section for details.

## Environment Variables

Configure your environment variables in `.env.local`:

~~~env
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
GOOGLE_SHEETS_API_KEY=your_google_sheets_api_key
PROJECT_CATALYST_API_KEY=your_project_catalyst_api_key
~~~

Adjust the values as needed.

## Usage

### Running the Development Server

Start the development server with:

~~~bash
npm run dev
~~~

or

~~~bash
yarn dev
~~~

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production

Build the application for production:

~~~bash
npm run build
~~~

or

~~~bash
yarn build
~~~

### Running the Production Server

After building, start the production server:

~~~bash
npm start
~~~

or

~~~bash
yarn start
~~~

## Testing

Automated tests are located in the `tests/` directory. Run tests using:

~~~bash
npm test
~~~

or

~~~bash
yarn test
~~~

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
