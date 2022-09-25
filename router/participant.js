import express from "express";
import {
  addEmployee,
  getAllEmployees,
//   getEmployeeById,
//   updateEmployee,

} from "../controller/participant.js";
const router = express.Router();


//employee router
router.get("/getall", getAllParticipant);
// router.get("/getall/:id", getEmployeeById);
// router.put("/:id", updateEmployee);
router.post("/addparticipant", addParticipant);
// router.delete("/:id", deleteEmployee);



export default router;
