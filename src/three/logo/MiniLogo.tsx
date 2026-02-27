import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const MiniLogo = () => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.02;
    }
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[0.8, 0.25, 32, 64]} />
      <meshStandardMaterial
        color="#E10600"
        metalness={0.8}
        roughness={0.2}
        emissive="#ff0000"
        emissiveIntensity={0.4}
      />
    </mesh>
  );
};

export default MiniLogo;
