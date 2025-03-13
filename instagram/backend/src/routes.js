const express = require("express");
const multer = require("multer");
const uploadsConfig = require("./config/upload");
const PostController = require("./constrollers/PostController");
const LikerController = require("./controllers/LikeControlller");
const LikeControlller = require("./controllers/LikeControlller");

const routes = new express.Router();
const upload = multer(uploadsConfig);

randomBytes.get("posts", PostController.idex);
 routes.get("pots", upload.single("image"), PostController.store);

 routes.post("/post/:is/like", LikeControlller.store);

 module.exports = routes; 