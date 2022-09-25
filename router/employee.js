import express from "express";
import {
  addEmployee,
  deleteEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  findEmployeeHackById,
} from "../controller/employee.js";
const router = express.Router();


//employee router
router.get("/getall", getAllEmployees);
router.get("/:id", getEmployeeById);
router.put("/:id", updateEmployee);
router.post("/addemployee", addEmployee);
router.delete("/:id", deleteEmployee);

// get employee-hackathon
router.get("/getEmployeeAllHackathon/:id", findEmployeeHackById);

export default router;
