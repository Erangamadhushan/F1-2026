import { drivers } from "../../data/drivers";
import SectionTitle from "../shared/SectionTitle";
import DriverCard from "./DriverCard";

const DriversSection = () => {
  return (
    <section
      id="drivers"
      className="min-h-screen px-8 py-24 bg-black"
    >
      <SectionTitle
        title="Drivers"
        subtitle="The heroes of the grid."
      />

      <div className="grid md:grid-cols-2 gap-8">
        {drivers.map((driver) => (
          <DriverCard key={driver.id} driver={driver} />
        ))}
      </div>
    </section>
  );
};

export default DriversSection;