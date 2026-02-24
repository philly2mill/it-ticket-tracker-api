// src/pages/CreateTicket.js
import React, { useState } from "react";
import { createTicket } from "../api/ticketsApi";

const CreateTicket = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Open");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTicket({ title, description, status, priority }).then(() => {
      alert("Ticket created!");
      setTitle(""); setDescription(""); setStatus("Open"); setPriority("Low");
    });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Create Ticket</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label><br />
          <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label><br />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Status:</label><br />
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>Open</option>
            <option>In Progress</option>
            <option>Resolved</option>
            <option>Closed</option>
          </select>
        </div>
        <div>
          <label>Priority:</label><br />
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        <button type="submit" style={{ marginTop: "1rem" }}>Create Ticket</button>
      </form>
    </div>
  );
};

export default CreateTicket;