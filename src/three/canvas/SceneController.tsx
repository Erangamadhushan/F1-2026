import { Suspense } from "react";
import Car from "../objects/Car";
import Lights from "../environment/Lights";
import EnvironmentMap from "../environment/EnvironmentMap";
import CameraRig from "../camera/CameraRig";
import PostProcessing from "../effects/PostProcessing";

const SceneController = () => {
  return (
    <>
      <Lights />
      <EnvironmentMap />

      <Suspense fallback={null}>
        <Car />
      </Suspense>

      <CameraRig />
      <PostProcessing />
    </>
  );
};

export default SceneController;
