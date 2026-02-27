import { f1Calendar2026 } from "../../data/calendar2026";
import SectionTitle from "../shared/SectionTitle";
import { useNextRace } from "../../hooks/useNextRace";

const CalendarSection = () => {
  const { nextRace, countdown } = useNextRace();

  return (
    <section className="min-h-screen bg-neutral-950 px-10 py-32" id="calendar">
      <SectionTitle
        title="2026 Race Calendar"
        subtitle="The global battle begins."
      />

      {/* Countdown Banner */}
      {nextRace && countdown && (
        <div className="mb-16 p-8 rounded-xl bg-black border border-red-600 items-center">
          <h3 className="text-2xl font-bold mb-4 text-red-500">
            Next Grand Prix: {nextRace.name}
          </h3>

          <div className="flex gap-8 text-xl font-mono">
            <div>{countdown.days}d</div>
            <div>{countdown.hours}h</div>
            <div>{countdown.minutes}m</div>
            <div>{countdown.seconds}s</div>
          </div>
        </div>
      )}

      {/* Race Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {f1Calendar2026.map((race) => {
          const isNext = nextRace?.round === race.round;

          return (
            <div
              key={race.round}
              className={`p-6 rounded-xl border transition duration-300 ${
                isNext
                  ? "border-red-600 bg-neutral-900 scale-[1.02]"
                  : "border-neutral-800 hover:border-red-600"
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm opacity-60">Round {race.round}</span>

                <img
                  src={`https://flagcdn.com/w40/${race.flagCode}.png`}
                  alt={race.country}
                  className="w-8 h-5 object-cover rounded-sm"
                />
              </div>

              <h3 className="text-xl font-semibold">{race.name}</h3>

              <p className="opacity-60 text-sm">
                {race.city}, {race.country}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CalendarSection;
