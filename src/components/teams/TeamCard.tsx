import { motion } from "framer-motion";
import { useState } from "react";
import { useSceneStore } from "../../store/useSceneStore";

interface Team {
  id: number;
  name: string;
  color: string;
  description: string;
}

interface Props {
  team: Team;
}

const TeamCard = ({ team }: Props) => {
  const { selectedTeam, setSelectedTeam } = useSceneStore();
  const [showDescription, setShowDescription] = useState(false);

  const isActive = selectedTeam === team.name;

  return (
    <motion.div
      onClick={() => {
        setSelectedTeam(team.name);
        setShowDescription((prev) => !prev);
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="relative p-10 rounded-tr-4xl rounded-bl-4xl cursor-pointer overflow-hidden border transition-all duration-300"
      style={{
        borderColor: team.color,
      }}
    >
      {/* Background glow */}
      <div
        className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${
          isActive ? "opacity-20" : "group-hover:opacity-10"
        }`}
        style={{ backgroundColor: team.color }}
      />

      {/* Team Name */}
      <h3
        className={`relative text-3xl font-semibold transition-all duration-300`}
        style={{
          color: isActive ? team.color : "white",
        }}
      >
        {team.name}
      </h3>

      {/* Bottom animated line */}
      <motion.div
        layout
        className="absolute bottom-0 left-0 h-[2px]"
        style={{ backgroundColor: team.color }}
        animate={{
          width: isActive ? "100%" : "0%",
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Description */}
      {showDescription && (
        <motion.p
          className="relative mt-4 text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          {team.description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default TeamCard;
