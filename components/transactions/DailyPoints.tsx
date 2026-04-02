"use client";

import { calculateDailyPoints, formatPoints } from "@/lib/points";

export function DailyPoints() {
  const points = calculateDailyPoints();
  const formattedPoints = formatPoints(points);
  
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col min-h-[110px]">
      <span className="text-xs text-gray-500 font-medium">Daily Points</span>
      <span className="text-xl font-semibold text-gray-900 mt-1">{formattedPoints}</span>
    </div>
  );
}
