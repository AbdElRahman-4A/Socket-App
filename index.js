// index.js
const WebSocket = require("ws");

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

// Event handler for new connections
wss.on("connection", (ws) => {
  console.log("Client connected");

  // Event handler for incoming messages
  ws.on("message", (message) => {
    console.log(`Received: ${message}`);

    // Send a response back to the client
    ws.send(`Server received: ${message}`);
  });
});

console.log("WebSocket server running on port 8080");
