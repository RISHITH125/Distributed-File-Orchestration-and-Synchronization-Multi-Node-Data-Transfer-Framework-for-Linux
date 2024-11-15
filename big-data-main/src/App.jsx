import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import MainWindow from "./components/MainWindow"; // Import your main window component
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/MainWindow" element={<MainWindow />} />
      </Routes>
    </Router>
  );
}

export default App;
