This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Stock Data Application README

## Overview

This repository contains a stock data application developed using React, Next.js, and the Alpha Vantage API. The application fetches and displays daily stock data for a specific symbol (e.g., 'MSFT' for Microsoft).

## Components

### 1. `StockPage.tsx`

- **Description**: React component responsible for fetching and displaying stock data.

#### Features:

- **State Variables**: 
  - `data`: Fetched stock data.
  - `symbol`: Stock symbol to display.

- **UseEffect Hook**: Fetches stock data upon component mounting.

- **Conditional Rendering**: Displays stock data in a table format if available; otherwise, shows loading or "No data available" messages.

### 2. `pages/api/stock/[symbol].tsx`

- **Description**: Next.js API route for fetching stock data from Alpha Vantage.

#### Features:

- **API Endpoint**: Accepts a stock symbol query parameter to fetch corresponding stock data from Alpha Vantage.

- **Error Handling**: Handles API request errors and sends appropriate error responses.

### 3. `pages/index.tsx`

- **Description**: Main entry point rendering the `Stocks` component.

#### Features:

- **Component Rendering**: Renders the `Stocks` component on the homepage to display stock data.

## Setup

1. **Install Dependencies**: Ensure you have the required dependencies installed (`react`, `next.js`, `axios`).
   
2. **Environment Configuration**: 
   - Create a `.env.local` file in the project root.
   - Add your Alpha Vantage API key to the `.env.local` file:
     ```
     ALPHA_VANTAGE_API_KEY=your_api_key_here
     ```

3. **Run the Application**: Use the appropriate scripts to run the application (e.g., `npm run dev`).

## Usage

1. After setting up, navigate to the application homepage (`/`).
   
2. You should see the stock data displayed for the 'MSFT' symbol or the specified symbol.

## Security Note

- Always handle API keys securely.
- Avoid committing sensitive information like API keys to version control systems.
- Store sensitive information, such as API keys, in environment variables or secure configuration files.

## Conclusion

This README provides an overview of the stock data application structure and functionality. Follow the setup instructions to run the application and explore the stock data for different symbols.

---

For any issues or enhancements, please refer to the repository's issue tracker or submit a pull request.
