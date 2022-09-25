import express from "express";
import {
  deleteEmployeeHackById
} from "../controller/employee_hackathon.js";

const router = express.Router();


// get employee-hackathon

router.delete("/delete/:id", deleteEmployeeHackById);

export default router;
