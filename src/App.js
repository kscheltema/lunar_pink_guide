import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Home />
    </div>
  );
}

export default App;
