import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Classifieds from "./pages/Classifieds";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "the pink guide";
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/classifieds" element={<Classifieds />} />
      </Routes>
    </div>
  );
}

export default App;
