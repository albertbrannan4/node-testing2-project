const express = require("express");
const UserRouter = require("./User/user-router");

const server = express();

server.use(express.json());
server.use("/api/user", UserRouter);
module.exports = server;
