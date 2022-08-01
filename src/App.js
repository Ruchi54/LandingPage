import "./App.css";
import Canvas from "./components/Canvas";
import Data from "./components/Data";
import Datas from "./components/Datas";
import Datass from "./components/Datass";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Canvas />
      <Home />
      <Data />
      <Datas />
      <Datass />
      <Footer />
    </div>
  );
}

export default App;
