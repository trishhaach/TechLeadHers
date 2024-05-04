import { Router } from "express";

const teacherController = Router();

const teacherList = [
  {
    name: "John",
    age: 34,
    faculty: "software",
  },
  {
    name: "Sarah",
    age: 24,
    faculty: "computer",
  },
  {
    name: "Mary",
    age: 30,
    faculty: "IT",
  },
];

teacherController.get("/list", (req, res) => {
  res.status(200).json({
    students: studentList,
  });
});

studentController.post("/create", (req, res) => {
    const student = req.body;
    if(!student.name && !student.age) {
        console.log("name: ", student.name, "age: ", student.age);
  
    res.status(200).json({
      message: "unsucessfull!!!",
    });
    } else {
  
    res.status(400).json({
      message: "student created!!!",
    });
    }
    
  });

export default studentController;