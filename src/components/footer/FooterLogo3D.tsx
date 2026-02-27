import { Canvas } from "@react-three/fiber";
import MiniLogo from "../../three/logo/MiniLogo";

const FooterLogo3D = () => {
  return (
    <div className="w-24 h-24">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 3, 3]} />
        <MiniLogo />
      </Canvas>
    </div>
  );
};

export default FooterLogo3D;
