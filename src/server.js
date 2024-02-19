import cors from "cors";
import express from "express";
import studentController from "./controllers/studentController.js";

const app = express();
const port = 8080;

app.use(cors());
app.set("port", port);
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello, world!");
});

app.get("/json", (req, res) => {
    res.status(200).json({ data: "Hello world!" });
  });

  app.get("/student", (req, res) => {
    res.status(200).json({ name: "trisha", age: 21 });
  });

app.use("/api/students", studentController);

app.listen(port, () => {
    console.log(`REST API application is running on port ${port}.`);
  });