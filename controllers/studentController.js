
import { Student } from "../models/studentModel.js";

// Create
export const createStudent = async (req, res) => {
  console.log("Request body:", req.body);

  const student = await Student.create(req.body);
  res.json(student);
};

// Read all 
export const getAllStudents = async (req, res) => {
  const students = await Student.findAll();
  res.json(students);
};

// Read one
export const getStudentById = async (req, res) => {
  const student = await Student.findByPk(req.params.id);
  res.json(student);
};


// Update
export const updateStudent = async (req, res) => {
  const student = await Student.findByPk(req.params.id);
  await student.update(req.body);
  res.json(student);
};

// Delete
export const deleteStudent = async (req, res) => {
  const student = await Student.findByPk(req.params.id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  await student.destroy();

  res.json({
    message: "Student deleted successfully"
  });
};
