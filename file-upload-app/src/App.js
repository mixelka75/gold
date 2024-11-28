// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadPage from "./UploadPage";
import StatusPage from "./StatusPage";
import "./App.css";
import ImageCorner from "./ImageCorner";
import logo from "./logo.svg"; // Импорт SVG

function App() {
  return (
    <div className="app-container" style={{ position: "relative" }}>
      <Router>
        <Routes>
          <Route path="/" element={<UploadPage />} />
          <Route path="/status/:filename" element={<StatusPage />} />
        </Routes>
      </Router>
      {/* Передаём SVG и задаём отступ */}
      <ImageCorner svg={logo} offset={20} />
    </div>
  );
}

export default App;
