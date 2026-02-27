import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const CameraRig = () => {
  const timeRef = useRef<number>(0);

  useFrame((state, delta) => {
    timeRef.current += delta;

    state.camera.position.x = Math.sin(timeRef.current * 0.3) * 0.5;
    state.camera.position.y =
      1.5 + Math.sin(timeRef.current * 0.5) * 0.1;

    state.camera.lookAt(0, 0.5, 0);
  });

  return null;
};

export default CameraRig;