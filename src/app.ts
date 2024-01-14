import { createServer } from "http";
import { Server } from "socket.io";
require('dotenv').config();

const httpServer = createServer();
const io = new Server(httpServer);

io.on("connection", function(socket: any) {
    console.log("a user connected");
  // whenever we receive a 'message' we log it out
    socket.on("message", function(message: any) {
        console.log(message);
    });
});

httpServer.listen(process.env.PORT);
