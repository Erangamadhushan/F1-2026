import { Canvas } from "@react-three/fiber";
import SceneController from "./SceneController";

const Experience = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 1.5, 6], fov: 35 }}
      gl={{ antialias: true }}
      className="h-full w-full"
    >
      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#000000", 10, 20]} />
      <SceneController />
    </Canvas>
  );
};

export default Experience;