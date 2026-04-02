"use client";

interface CardBalanceProps {
  balance: number;
  available: number;
}

export function CardBalance({ balance, available }: CardBalanceProps) {
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col min-h-[110px]">
      <span className="text-xs text-gray-500 font-medium">Card Balance</span>
      <div className="mt-1">
        <span className="text-[28px] font-bold text-gray-900 tracking-tight">
          ${balance.toFixed(2)}
        </span>
        <p className="text-xs text-gray-500 mt-0.5">
          ${available.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Available
        </p>
      </div>
    </div>
  );
}
