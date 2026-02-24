
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTicketById } from "../api/ticketsApi";

const TicketDetails = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    getTicketById(id).then(setTicket);
  }, [id]);

  if (!ticket) return <p>Loading...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{ticket.title}</h1>
      <p>{ticket.description}</p>
      <p>Status: {ticket.status}</p>
      <p>Priority: {ticket.priority}</p>
    </div>
  );
};

export default TicketDetails;