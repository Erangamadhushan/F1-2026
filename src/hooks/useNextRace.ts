import { useEffect, useState } from "react";
import { f1Calendar2026, type F1Race } from "../data/calendar2026";

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function useNextRace() {
  const [nextRace, setNextRace] = useState<F1Race | null>(null);
  const [countdown, setCountdown] = useState<Countdown | null>(null);

  useEffect(() => {
    const now = new Date();

    const upcoming = f1Calendar2026
      .filter((race) => new Date(race.startDate) > now)
      .sort(
        (a, b) =>
          new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
      );

    if (upcoming.length > 0) {
      setNextRace(upcoming[0]);
    }
  }, []);

  useEffect(() => {
    if (!nextRace) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const raceTime = new Date(nextRace.startDate).getTime();
      const diff = raceTime - now;

      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [nextRace]);

  return { nextRace, countdown };
}
