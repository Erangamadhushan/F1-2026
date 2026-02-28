import { useState } from "react";
import { drivers2026 } from "../../data/drivers2026";

const DriversSection = () => {
  const [selectedTeam, setSelectedTeam] = useState<string>("All");

  const teams = ["All", ...new Set(drivers2026.map((d) => d.team))];

  const filteredDrivers =
    selectedTeam === "All"
      ? drivers2026
      : drivers2026.filter((d) => d.team === selectedTeam);

  return (
    <section className="min-h-screen bg-black px-10 py-32" id="drivers">
      <h2 className="text-5xl font-bold mb-10">2026 Drivers</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        {teams.map((team) => (
          <button
            key={team}
            onClick={() => setSelectedTeam(team)}
            className={`px-4 py-2 border rounded-full transition ${
              selectedTeam === team
                ? "bg-red-600 border-red-600"
                : "border-neutral-700 hover:border-red-600"
            }`}
          >
            {team}
          </button>
        ))}
      </div>

      {/* Driver Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {filteredDrivers.map((driver) => (
          <div
            key={driver.id}
            className="p-6 border border-neutral-800 rounded-xl hover:scale-105 transition"
          >
            {/* <img
              src={driver.image}
              alt={driver.lastName}
              className="w-full h-60 object-cover rounded-lg mb-4"
            /> */}

            <h3 className="text-xl font-bold">
              {driver.firstName} {driver.lastName}
            </h3>

            <p className="opacity-60 text-sm">
              #{driver.number} • {driver.team}
            </p>

            <p className="mt-2 text-sm opacity-50">
              {driver.nationality} • {driver.championships}× Champion
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm opacity-70">
              <img
                src={`https://flagcdn.com/w40/${driver.countryCode}.png`}
                alt={driver.nationality}
                className="w-5 h-3 object-cover rounded-sm"
              />
              {driver.nationality}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DriversSection;
