"use client";

export function NoPaymentDue() {
  const currentMonth = new Date().toLocaleString("default", { month: "long" });
  
  return (
    <div className="bg-[#F5F5F7] rounded-2xl p-4 flex flex-col min-h-[110px]">
      <span className="text-xs text-gray-900 font-semibold">No Payment Due</span>
      <p className="text-xs text-gray-400 mt-1 leading-relaxed">
        You&apos;ve paid your<br />{currentMonth} balance.
      </p>
    </div>
  );
}
