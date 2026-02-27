interface Driver {
  id: number;
  name: string;
}

interface Props {
  driver: Driver;
}

const DriverCard = ({ driver }: Props) => {
  return (
    <div className="p-8 border border-neutral-800 rounded-lg hover:bg-neutral-900 transition cursor-pointer">
      <h3 className="text-2xl font-semibold">{driver.name}</h3>
    </div>
  );
};

export default DriverCard;
