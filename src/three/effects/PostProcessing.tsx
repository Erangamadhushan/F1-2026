import { EffectComposer, Bloom } from "@react-three/postprocessing";

const PostProcessing = () => {
  return (
    <EffectComposer>
      <Bloom intensity={0.6} />
    </EffectComposer>
  );
};

export default PostProcessing;