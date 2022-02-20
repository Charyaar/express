const { Socket } = require("dgram");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server,{cors:{origin:"*"}});

app.set("view engine", "ejs");

app.get("/home",(req,res)=>{
    res.render("home");
});

server.listen(3001,()=>{
    console.log("server is runing at http://localhost:${3001}" );
});

io.on("connection", (Socket)=>{

    console.log("user connected : "+ Socket.id);
    
    Socket.on("message",(data)=>{
       Socket.broadcast.emit('message',data)
        // console.log(data);
    })




})