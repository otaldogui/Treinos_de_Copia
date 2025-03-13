const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express(); 

const sever = require("http").Server(app);
const io = require("socket.io"); 

mongoose.connect(
    "mongodb+srv://semana:semana@cluster0-r5kfb.mongodb.net/test?retryWrites=true&w=majority",
    {
        useNewUrlParser: true
    }
);

app.use((req,res, next) => {
    req.io = io;

    next();
});

app.use(cors());

    app.use(
    "/files",
    express.static(path.resolve(__dirname, ".." "uploads", "resized"))
);

app.use(require("./routes"));

Server.listen(3333);