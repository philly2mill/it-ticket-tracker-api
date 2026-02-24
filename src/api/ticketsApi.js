// src/api/ticketsApi.js
let tickets = [
    { id: 1, title: "Computer won't start", description: "Desktop is dead", status: "Open", priority: "High" },
    { id: 2, title: "Email issue", description: "Can't send emails", status: "In Progress", priority: "Medium" },
  ];
  
  export const getTickets = () => {
    return Promise.resolve(tickets);
  };
  
  export const getTicketById = (id) => {
    const ticket = tickets.find(t => t.id === parseInt(id));
    return Promise.resolve(ticket);
  };
  
  export const createTicket = (ticket) => {
    const newTicket = { id: tickets.length + 1, ...ticket };
    tickets.push(newTicket);
    return Promise.resolve(newTicket);
  };