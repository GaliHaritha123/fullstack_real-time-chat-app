const WebSocket = require("ws");
const axios = require("axios");

const wss = new WebSocket.Server({ port: 8080 });
console.log("✅ WebSocket server running on ws://localhost:8080");

wss.on("connection", (ws) => {
    console.log("✅ Client connected");

    ws.on("message", async (message) => {
        const textMessage = message.toString("utf-8").trim(); // Convert Buffer to String
        console.log("Received:", textMessage);

        // Send the message back to the client (echo)
        ws.send(textMessage);

        // Save message in Strapi
        try {
            const response = await axios.post("http://localhost:1337/api/messages", {
                data: { content: textMessage } // Ensure content is a plain string
            });

            console.log("✅ Message saved in Strapi:", response.data);
        } catch (error) {
            console.error("❌ Error saving message:", error.response ? error.response.data : error.message);
        }
    });

    ws.on("close", () => {
        console.log("⚠️ Client disconnected");
    });
});
