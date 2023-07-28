import Navbar from "./Components/Navbar/index";
import "./App.css";
import Routess from "./Routes";

function App() {
  return (
    <div className="App">
      <div className="navBar">
        <Navbar />
      </div>
      <div className="routes">
        <Routess />
      </div>
    </div>
  );
}

export default App;
