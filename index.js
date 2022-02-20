const { Socket } = require("dgram");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server,{cors:{origin:"*"}});
const port = process.env.PORT || 3001;

app.set("view engine", "ejs");

app.get("/home",(req,res)=>{
    res.render("home");
});

server.listen(port,()=>{
    console.log('server is runing at http://localhost:${port}');
});

io.on("connection", (Socket)=>{

    console.log("user connected : "+ Socket.id);
    
    Socket.on("message",(data)=>{
       Socket.broadcast.emit('message',data)
        // console.log(data);
    })




})