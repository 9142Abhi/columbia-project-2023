import "./App.css";
import Heading from "./Component/Heading";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div className="App" style={{ width: "99.5%", margin: "auto" }}>
      <Navbar />
      <Heading />
    </div>
  );
}

export default App;
