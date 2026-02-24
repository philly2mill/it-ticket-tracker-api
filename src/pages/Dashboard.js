
import React, { useEffect, useState } from "react";
import { getTickets } from "../api/ticketsApi";
import TicketCard from "../components/TicketCard"; // must match default export

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getTickets().then(setTickets);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Dashboard</h1>
      {tickets.length === 0 ? <p>No tickets found.</p> : tickets.map(ticket => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default Dashboard;