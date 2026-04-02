// Season start dates (month is 0-indexed)
const SEASON_STARTS = {
  spring: { month: 2, day: 1 },  // March 1
  summer: { month: 5, day: 1 },  // June 1
  autumn: { month: 8, day: 1 },  // September 1
  winter: { month: 11, day: 1 }, // December 1
};

function getSeasonStart(date: Date): Date {
  const year = date.getFullYear();
  const month = date.getMonth();
  
  if (month >= 11) {
    // December - winter starts this year
    return new Date(year, 11, 1);
  } else if (month >= 8) {
    // September - November: autumn
    return new Date(year, 8, 1);
  } else if (month >= 5) {
    // June - August: summer
    return new Date(year, 5, 1);
  } else if (month >= 2) {
    // March - May: spring
    return new Date(year, 2, 1);
  } else {
    // January - February: still winter from last year
    return new Date(year - 1, 11, 1);
  }
}

function getDayOfSeason(date: Date): number {
  const seasonStart = getSeasonStart(date);
  const diffTime = date.getTime() - seasonStart.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays + 1; // 1-indexed
}

export function calculateDailyPoints(date: Date = new Date()): number {
  const dayOfSeason = getDayOfSeason(date);
  
  // Calculate points using memoization for efficiency
  const memo: Record<number, number> = {};
  
  function getPoints(day: number): number {
    if (day <= 0) return 0;
    if (day === 1) return 2;
    if (day === 2) return 3;
    
    if (memo[day]) return memo[day];
    
    // Points = 100% of (day-2) + 60% of (day-1)
    const points = getPoints(day - 2) + 0.6 * getPoints(day - 1);
    memo[day] = points;
    return points;
  }
  
  return Math.round(getPoints(dayOfSeason));
}

export function formatPoints(points: number): string {
  if (points >= 1000) {
    return Math.round(points / 1000) + "K";
  }
  return points.toString();
}
