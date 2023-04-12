const express = require("express");
const UserRouter = require("./User/user-router");

const server = express();

server.use(express.json());
server.use("/user", UserRouter);
module.exports = server;
