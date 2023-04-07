import Welcome from "./Pages/Welcome";
import "./App.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";

function App() {
  return (
    <ThirdwebProvider activeChain="goerli">
      <div className="App">
        <Welcome></Welcome>
      </div>
    </ThirdwebProvider>
  );
}

export default App;
