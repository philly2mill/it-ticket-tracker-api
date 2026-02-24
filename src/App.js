// src/App.js
import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CreateTicket from "./pages/CreateTicket";
import Dashboard from "./pages/Dashboard";
import TicketDetails from "./pages/TicketDetails";

function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem", background: "#eee" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>Dashboard</Link>
        <Link to="/create">Create Ticket</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<CreateTicket />} />
        <Route path="/ticket/:id" element={<TicketDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
