const SECONDS_IN_A_DAY = 86400;
const SECONDS_IN_AN_HOUR = 3600;
const SECONDS_IN_A_MINUTE = 60;

export function secondsToTimeSpan(seconds: number): string {
  const days = Math.floor(seconds / SECONDS_IN_A_DAY);
  seconds -= days * SECONDS_IN_A_DAY;

  const hours = Math.floor(seconds / SECONDS_IN_AN_HOUR);
  seconds -= hours * SECONDS_IN_AN_HOUR;

  const minutes = Math.floor(seconds / SECONDS_IN_A_MINUTE);
  seconds -= minutes * SECONDS_IN_A_MINUTE;

  const parts: string[] = [];

  if (days > 0) {
    parts.push(`${days}d`);
  }

  if (hours > 0) {
    parts.push(`${hours}h`);
  }

  if (minutes > 0) {
    parts.push(`${minutes}m`);
  }

  if (seconds > 0) {
    parts.push(`${seconds}s`);
  }

  return parts.join(" ");
}
