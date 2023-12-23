require("dotenv").config();
const express = require("express");
const app = express();
const empRouter = require("./api/employee/emp.route.js");

app.use(express.json());

app.use("/api", (req,res) => {
  res.json({
    message: "API is up running",
  });
});

app.use("/", empRouter);

app.listen(3000 , ()=>{
    console.log("Server is up and running on PORT : ",3000);
});
