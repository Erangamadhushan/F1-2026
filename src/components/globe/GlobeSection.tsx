import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import Globe from "../../three/globe/Globe";

const GlobeSection = () => {
  return (
    <section className="h-screen bg-black">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <sphereGeometry args={[2, 64, 64]} />
        <directionalLight position={[5, 3, 5]} intensity={1.5} />
        <fog attach="fog" args={["#000000", 8, 20]} />
        <pointLight position={[5, 5, 5]} intensity={1.2} />

        <Stars
          radius={100} // radius of star sphere
          depth={50} // starfield depth
          count={5000} // number of stars
          factor={4} // star size
          saturation={0} // white stars
          fade // smooth fade at edges
          speed={0.5} // slow animation speed
        />

        <Globe />
      </Canvas>
    </section>
  );
};

export default GlobeSection;
