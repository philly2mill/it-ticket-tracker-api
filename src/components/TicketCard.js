// src/components/TicketCard.js
import React from "react";

const TicketCard = ({ ticket }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", borderRadius: "5px" }}>
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <p>Status: {ticket.status}</p>
      <p>Priority: {ticket.priority}</p>
    </div>
  );
};

export default TicketCard;