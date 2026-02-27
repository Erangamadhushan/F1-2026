import { f1Calendar2026 } from "../data/calendar2026";
import { type F1Race } from "../data/calendar2026";

export function getNextGrandPrix(): F1Race | null {
  const today = new Date();
  const upcoming = f1Calendar2026
    .filter((race) => new Date(race.startDate) >= today)
    .sort(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
    );
  return upcoming.length ? upcoming[0] : null;
}

export function getCountdown(race: F1Race) {
  const now = new Date().getTime();
  const start = new Date(race.startDate).getTime();
  const diff = start - now;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}
