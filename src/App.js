import React from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import "./App.css";

import HomeScreen from "./screens/home/HomeScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </div>
  );
}

export default App;
