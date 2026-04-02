# Wallet Transactions App

A React/Next.js mobile-first wallet transactions application that displays card balance, payment status, daily points, and a list of recent transactions with detailed views.

## Features

- **Card Balance Display**: Shows current card balance and available credit (limit: $1500)
- **Payment Status**: Displays payment due status with a visual checkmark indicator
- **Daily Points System**: Calculates and displays points based on a seasonal algorithm
- **Transaction List**: Shows the 10 most recent transactions with icons, amounts, and metadata
- **Transaction Details**: Click any transaction to view full details including status and card type

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: FontAwesome (brands and solid icons)
- **Data**: JSON-based mock data

## Project Structure

```
├── app/
│   ├── page.tsx              # Main entry point
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   └── transactions/
│       ├── index.ts          # Barrel exports
│       ├── TransactionsList.tsx    # Main container component
│       ├── TransactionDetail.tsx   # Transaction detail view
│       ├── TransactionItem.tsx     # Individual transaction row
│       ├── TransactionIcon.tsx     # Icon renderer (FA + custom SVGs)
│       ├── CardBalance.tsx         # Card balance display
│       ├── NoPaymentDue.tsx        # Payment status with checkmark
│       └── DailyPoints.tsx         # Daily points display
├── data/
│   └── transactions.json     # Mock transaction data
├── lib/
│   ├── points.ts             # Daily points calculation logic
│   └── date.ts               # Date formatting utilities
└── types/
    └── transaction.ts        # TypeScript interfaces
```

## Components

### TransactionsList
The main container component that orchestrates the layout:
- Displays the card balance, payment status, and daily points in a grid
- Renders the list of transactions
- Manages navigation to transaction details

### TransactionDetail
Full-screen detail view for a selected transaction showing:
- Transaction amount
- Merchant name
- Date and time
- Approval status
- Card type used
- Total amount

### TransactionItem
Individual transaction row displaying:
- Merchant icon (FontAwesome or custom SVG for brands like IKEA, Target)
- Transaction name and description
- Amount (with "+" prefix for payments)
- Points percentage (in a rounded badge)
- Pending status indicator
- Authorized user (if different from account holder)
- Formatted date (day name for recent, MM/DD/YY for older)

### CardBalance
Displays:
- Current card balance
- Available credit (limit minus balance)

### NoPaymentDue
Shows payment status with:
- "No Payment Due" header
- Monthly payment confirmation message
- Visual checkmark indicator

### DailyPoints
Displays calculated daily points based on the seasonal algorithm.

## Daily Points Calculation

Points are calculated based on the current day of the season:

| Season | Start Date |
|--------|-----------|
| Spring | March 1 |
| Summer | June 1 |
| Autumn | September 1 |
| Winter | December 1 |

**Algorithm:**
- Day 1 of season: 2 points
- Day 2 of season: 3 points
- Day 3+: `points[n-2] + (0.6 * points[n-1])`

Points exceeding 1000 are displayed in "K" format (e.g., 28745 becomes "29K").

## Transaction Data Structure

```typescript
interface Transaction {
  id: string;
  type: "Payment" | "Credit";
  name: string;
  description: string;
  amount: number;
  date: string;           // ISO date string
  pending: boolean;
  authorizedUser: string | null;
  points: number | null;  // Percentage (e.g., 3 for 3%)
  icon: string;           // FontAwesome icon name or brand
  iconBg: string;         // Background color for icon
  status: string;         // "Approved" or "Pending"
  cardType: string;       // e.g., "RBC Bank Debit Card"
}
```

## Date Formatting

- **Today**: "Today"
- **Yesterday**: "Yesterday"
- **Within last 7 days**: Day name (e.g., "Tuesday")
- **Older**: MM/DD/YY format

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Customization

### Adding New Transactions
Edit `data/transactions.json` to add or modify transactions. Ensure all required fields are populated.

### Adding New Icons
Modify `components/transactions/TransactionIcon.tsx` to add support for additional brand icons or custom SVGs.

### Modifying Points Algorithm
Edit `lib/points.ts` to adjust the seasonal dates or calculation formula.

## License

MIT
