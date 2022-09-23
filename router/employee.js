import express from "express";
import {
  addEmployee,
  deleteEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  findEmployeeHackById,
} from "../controller/employee.js";

import {
  addHackathon,
  getAllHackathons,
  getHackathonById,
} from "../controller/hackathon.js";

const router = express.Router();

// Hackathon Url and Controller

router.get("/test/allHackathon", getAllHackathons);
router.post("/addHackathon", addHackathon);
router.post("/test/allHackathon/:id", getHackathonById);

//employee router
router.get("/", getAllEmployees);
router.get("/:id", getEmployeeById);
router.put("/:id", updateEmployee);
router.post("/", addEmployee);
router.delete("/:id", deleteEmployee);

// get employee hackathon
router.get("/getEmployeeHackathon/:id", findEmployeeHackById);

export default router;
