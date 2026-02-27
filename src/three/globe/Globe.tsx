import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { f1Calendar2026 } from "../../data/calendar2026";

const Globe = () => {
  const globeRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.0015;
    }
  });

  return (
    <>
      {/* Earth Sphere */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          color="#1e3a8a"
          roughness={0.6}
          metalness={0.1}
          emissive="#0a1f44"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Race Markers */}
      {f1Calendar2026.map((race) => {
        const phi = (90 - race.lat) * (Math.PI / 180);
        const theta = (race.lng + 180) * (Math.PI / 180);

        const x = -2 * Math.sin(phi) * Math.cos(theta);
        const y = 2 * Math.cos(phi);
        const z = 2 * Math.sin(phi) * Math.sin(theta);

        return (
          <mesh key={race.round} position={[x, y, z]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshBasicMaterial color="#E10600" />
          </mesh>
        );
      })}
    </>
  );
};

export default Globe;
