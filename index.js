const http = require("http");
const express = require("express");

const app = express();

//constants
const PORT = 8000;
const connectionString = "mongodb://localhost:27017/bikeXDB";

//local dependencies
const userRouter = require("./routes/userRouter");
const {connectMongoDB} = require("./connection");

//connection
connectMongoDB(connectionString);

//routes
app.use(express.json());
app.use("/user", userRouter);

//Server start
app.listen(PORT, ()=> {console.log("server Started !!")});

