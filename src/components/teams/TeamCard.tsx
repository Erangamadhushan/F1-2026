interface Team {
  id: number;
  name: string;
  color: string;
}

interface Props {
  team: Team;
}

const TeamCard = ({ team }: Props) => {
  return (
    <div
      className="p-8 border rounded-lg transition hover:scale-105 cursor-pointer"
      style={{ borderColor: team.color }}
    >
      <h3
        className="text-2xl font-semibold"
        style={{ color: team.color }}
      >
        {team.name}
      </h3>
    </div>
  );
};

export default TeamCard;