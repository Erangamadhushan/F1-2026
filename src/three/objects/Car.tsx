import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Car = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.5, 0]}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[3, 0.5, 1.2]} />
        <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
};

export default Car;
