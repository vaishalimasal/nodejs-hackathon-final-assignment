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
  getHackathonSearch,
} from "../controller/hackathon.js";

const router = express.Router();

// Hackathon Url and Controller

router.get("/allHackathon", getAllHackathons);
router.post("/addHackathon", addHackathon);
router.get("/test/allhackathon/:id", getHackathonById);
router.get("/searchhackathon", getHackathonSearch);

//employee router
router.get("/", getAllEmployees);
//router.get("/:id", getEmployeeById);
router.put("/:id", updateEmployee);
router.post("/", addEmployee);
router.delete("/:id", deleteEmployee);

// get employee-hackathon
router.get("/getEmployeeHackathon/:id", findEmployeeHackById);

export default router;
