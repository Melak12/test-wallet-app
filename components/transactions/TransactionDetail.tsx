"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Transaction } from "@/types/transaction";
import { formatDetailDate } from "@/lib/date";

interface TransactionDetailProps {
  transaction: Transaction;
  onBack: () => void;
}

export function TransactionDetail({ transaction, onBack }: TransactionDetailProps) {
  const { name, amount, date, status, cardType } = transaction;
  
  const formattedAmount = `$${amount.toFixed(2)}`;
  const formattedDate = formatDetailDate(date);

  return (
    <div className="min-h-screen bg-[#F5F5F7] flex flex-col">
      {/* Header */}
      <div className="pt-4 px-4">
        <button 
          onClick={onBack}
          className="text-[#007AFF] flex items-center gap-1 hover:opacity-70 transition-opacity"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
        </button>
      </div>

      {/* Amount Section */}
      <div className="flex flex-col items-center pt-10 pb-12">
        <span className="text-[48px] font-light text-gray-900 tracking-tight">{formattedAmount}</span>
        <span className="text-gray-400 mt-1 text-base">{name}</span>
        <span className="text-gray-400 text-sm">{formattedDate}</span>
      </div>

      {/* Details Card */}
      <div className="mx-4 bg-white rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-100">
          <p className="text-gray-900 text-[15px] font-medium">Status: {status}</p>
          <p className="text-gray-400 text-sm mt-0.5">{cardType}</p>
        </div>
        <div className="px-4 py-3 flex items-center justify-between">
          <span className="text-gray-900 text-[15px]">Total</span>
          <span className="text-gray-900 text-[15px]">{formattedAmount}</span>
        </div>
      </div>
    </div>
  );
}
