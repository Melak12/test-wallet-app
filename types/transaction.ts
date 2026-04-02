export interface Transaction {
  id: string;
  type: "Payment" | "Credit";
  name: string;
  description: string;
  amount: number;
  points: number | null;
  date: string;
  pending: boolean;
  authorizedUser: string | null;
  icon: string;
  iconBg: string;
  status: "Pending" | "Approved";
  cardType: string;
}

export interface TransactionsData {
  cardLimit: number;
  cardBalance: number;
  transactions: Transaction[];
}
