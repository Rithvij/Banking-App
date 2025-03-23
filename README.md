# Banking App - Finance Management Dashboard

This is a full-stack banking application built using **Next.js** and **TypeScript**. The application allows users to securely link multiple bank accounts, view their transaction history, transfer funds, and more. It integrates with **Plaid** and **Dwolla** for financial transactions, and uses **Appwrite** for backend services.

## Features
- **Authentication**: Ultra-secure SSR authentication with proper validations and authorization.
- **Connect Banks**: Integrates with **Plaid** to link multiple bank accounts.
- **Home Page**: Displays a general overview of the user's account, including total balances, recent transactions, and spending categories.
- **My Banks**: View a complete list of all connected banks with respective balances and account details.
- **Transaction History**: Includes pagination and filtering options to view transaction history of different bank accounts.
- **Real-time Updates**: Reflects changes across all relevant pages when new bank accounts are connected.
- **Funds Transfer**: Allows users to transfer funds using **Dwolla** to other accounts with required fields and recipient bank ID.
- **Responsiveness**: Adapts seamlessly to various screen sizes and devices, providing a consistent user experience across desktop, tablet, and mobile platforms.

## Tech Stack

- **Frontend**:  
  - Next.js
  - TypeScript
  - TailwindCSS
  - React Hook Form
  - Zod

- **Backend**:
  - Appwrite

- **APIs/Services**:
  - Plaid (for bank account linking and transaction data)
  - Dwolla (for funds transfer)

- **UI Components**:
  - ShadCN
  - Chart.js

