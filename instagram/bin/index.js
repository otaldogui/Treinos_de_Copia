const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express(); 

const sever = require("http").Server(app);
const io = require("socket.io")