"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Transaction } from "@/types/transaction";
import { TransactionIcon } from "./TransactionIcon";
import { formatTransactionDate } from "@/lib/date";

interface TransactionItemProps {
  transaction: Transaction;
  onClick: () => void;
}

export function TransactionItem({ transaction, onClick }: TransactionItemProps) {
  const {
    type,
    name,
    description,
    amount,
    points,
    date,
    pending,
    authorizedUser,
    icon,
    iconBg,
  } = transaction;

  const isPayment = type === "Payment";
  const formattedAmount = isPayment ? `+$${amount.toFixed(2)}` : `$${amount.toFixed(2)}`;
  const formattedDate = formatTransactionDate(date);

  // Build description line
  const descriptionParts: string[] = [];
  if (pending) {
    descriptionParts.push("Pending");
  }
  descriptionParts.push(description.length > 28 ? description.substring(0, 28) + "..." : description);
  
  // Build date line
  const dateParts: string[] = [];
  if (authorizedUser) {
    dateParts.push(authorizedUser);
  }
  dateParts.push(formattedDate);

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-start gap-3 py-3 px-1 hover:bg-gray-50 transition-colors text-left"
      >
        <TransactionIcon icon={icon} iconBg={iconBg} name={name} />
        
        <div className="flex-1 min-w-0">
          {/* Row 1: Name and Amount */}
          <div className="flex items-baseline justify-between gap-2">
            <span className="font-semibold text-gray-900 text-[15px]">{name}</span>
            <div className="flex items-baseline gap-2">
              <span className="font-normal text-gray-900 text-[15px] whitespace-nowrap">
                {formattedAmount}
              </span>
              <FontAwesomeIcon icon={faChevronRight} className="text-gray-300 text-xs" />
            </div>
          </div>
          
          {/* Row 2: Description and Points */}
          <div className="flex items-baseline justify-between gap-2 mt-0.5">
            <span className="text-[13px] text-gray-400 truncate">
              {descriptionParts.join(" - ")}
            </span>
            {points !== null && (
              <span className="text-[11px] text-gray-400 whitespace-nowrap mr-4 bg-gray-100 px-1.5 py-0.5 rounded">{points}%</span>
            )}
          </div>
          
          {/* Row 3: Author and Date */}
          <div className="mt-0.5">
            <span className="text-[13px] text-gray-400">{dateParts.join(" – ")}</span>
          </div>
        </div>
      </button>
    </div>
  );
}
