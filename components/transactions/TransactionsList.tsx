"use client";

import { useState } from "react";
import { Transaction, TransactionsData } from "@/types/transaction";
import { CardBalance } from "./CardBalance";
import { NoPaymentDue } from "./NoPaymentDue";
import { DailyPoints } from "./DailyPoints";
import { CheckMark } from "./CheckMark";
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
    <div className="min-h-screen bg-white pb-8">
      <div className="p-4 pt-2">
        {/* Top Grid - Card Balance, No Payment Due */}
        <div className="grid grid-cols-2 gap-2 mb-2">
          <CardBalance balance={cardBalance} available={available} />
          <NoPaymentDue />
        </div>

        {/* Bottom Grid - Daily Points, Check Mark */}
        <div className="grid grid-cols-2 gap-2">
          <DailyPoints />
          <CheckMark />
        </div>
      </div>

      {/* Latest Transactions Header */}
      <div className="px-4 pt-4 pb-3">
        <h2 className="text-[22px] font-bold text-gray-900">Latest Transactions</h2>
      </div>

      {/* Transactions List */}
      <div className="px-3">
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
