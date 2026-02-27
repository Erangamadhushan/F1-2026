import Home from "./routes/Home";
import SceneProvider from "./providers/SceneProvider";

const App = () => {
  return (
    <SceneProvider>
      <Home />
    </SceneProvider>
  );
};

export default App;
