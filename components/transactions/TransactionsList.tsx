"use client";

import { useState } from "react";
import { Transaction, TransactionsData } from "@/types/transaction";
import { CardBalance } from "./CardBalance";
import { NoPaymentDue } from "./NoPaymentDue";
import { DailyPoints } from "./DailyPoints";
import { TransactionItem } from "./TransactionItem";
import { TransactionDetail } from "./TransactionDetail";

interface TransactionsListProps {
  data: TransactionsData;
}

export function TransactionsList({ data }: TransactionsListProps) {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  const { cardLimit, cardBalance, transactions } = data;
  const available = cardLimit - cardBalance;

  if (selectedTransaction) {
    return (
      <TransactionDetail
        transaction={selectedTransaction}
        onBack={() => setSelectedTransaction(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F7] pb-8">
      <div className="p-4 pt-2">
        {/* Grid layout: Left column has Card Balance + Daily Points, Right column has No Payment Due spanning both rows */}
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-2">
            <CardBalance balance={cardBalance} available={available} />
            <DailyPoints />
          </div>
          <NoPaymentDue />
        </div>
      </div>

      {/* Latest Transactions Header */}
      <div className="px-4 pt-4 pb-3">
        <h2 className="text-[22px] font-bold text-gray-900">Latest Transactions</h2>
      </div>

      {/* Transactions List */}
      <div className="bg-white mx-3 rounded-xl">
        {transactions.slice(0, 10).map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            onClick={() => setSelectedTransaction(transaction)}
          />
        ))}
      </div>
    </div>
  );
}
