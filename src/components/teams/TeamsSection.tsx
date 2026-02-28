import { teams } from "../../data/teams";
import SectionTitle from "../shared/SectionTitle";
import TeamCard from "./TeamCard";

const TeamsSection = () => {
  return (
    <section id="teams">
      <SectionTitle
        title="Teams"
        subtitle="Choose your favorite constructor."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </section>
  );
};

export default TeamsSection;
