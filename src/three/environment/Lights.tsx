const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <pointLight position={[-4, 2, -4]} intensity={5} color="#E10600" />
    </>
  );
};

export default Lights;
