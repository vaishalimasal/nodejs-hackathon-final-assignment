import express from "express";
import {
  addEmployee,
  deleteEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  findEmployeeHackById,
  findEmployeeParticipantById
} from "../controller/employee.js";
const router = express.Router();


//employee router
router.get("/getall", getAllEmployees);
router.get("/getall/:id", getEmployeeById);
router.put("/:id", updateEmployee);
router.post("/addemployee", addEmployee);
router.delete("/:id", deleteEmployee);

// get employee-hackathon
router.get("/getEmployeeAllHackathon/:id", findEmployeeHackById);
// get employee-hackathon
router.get("/getEmployeeAllParticipant/:id", findEmployeeParticipantById);


export default router;
