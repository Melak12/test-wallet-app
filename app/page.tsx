import { TransactionsList } from "@/components/transactions";
import transactionsData from "@/data/transactions.json";
import { TransactionsData } from "@/types/transaction";

export default function Home() {
  return (
    <main className="max-w-md mx-auto bg-white min-h-screen">
      <TransactionsList data={transactionsData as TransactionsData} />
    </main>
  );
}
