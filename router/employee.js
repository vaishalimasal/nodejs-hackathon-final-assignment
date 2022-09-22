import express from "express";
import {
  addEmployee,
  deleteEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
} from "../controller/employee.js";

const router = express.Router();

router.get("/", getAllEmployees);
router.get("/:id", getEmployeeById);
router.put("/:id", updateEmployee);
router.post("/", addEmployee);
router.delete("/:id", deleteEmployee);

export default router;
