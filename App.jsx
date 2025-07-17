import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Reservations from "./pages/Reservations";
import Rooms from "./pages/Rooms";
import Payments from "./pages/Payments";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
