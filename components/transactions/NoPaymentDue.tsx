"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export function NoPaymentDue() {
  const currentMonth = new Date().toLocaleString("default", { month: "long" });
  
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col min-h-[110px]">
      <span className="text-xs text-gray-900 font-semibold">No Payment Due</span>
      <p className="text-xs text-gray-400 mt-1 leading-relaxed">
        You&apos;ve paid your<br />{currentMonth} balance.
      </p>
      <div className="flex-1 flex items-end justify-end mt-2">
        <div className="w-10 h-10 bg-[#1C1C1E] rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faCheck} className="text-white text-base" />
        </div>
      </div>
    </div>
  );
}
