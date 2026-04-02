export function formatTransactionDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  
  // Reset time for comparison
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const transactionDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  
  const diffTime = today.getTime() - transactionDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) {
    return "Today";
  } else if (diffDays === 1) {
    return "Yesterday";
  } else if (diffDays > 1 && diffDays <= 7) {
    // Within last week - show day name
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
  } else {
    // Older than a week - show date
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear().toString().slice(-2);
    return `${month}/${day}/${year}`;
  }
}

export function formatDetailDate(dateString: string): string {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear().toString().slice(-2);
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  
  return `${month}/${day}/${year}, ${hours}:${minutes}`;
}
