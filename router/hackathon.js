import express from "express";

import {
  addHackathon,
  getAllHackathons,
  getHackathonById,
  getHackathonSearch,
  deleteHackathonbyId,
} from "../controller/hackathon.js";

const router = express.Router();

// Hackathon Url and Controller

router.get("/all", getAllHackathons);
router.get("/all/:id", getHackathonById);
router.post("/add", addHackathon);
router.delete("delete/:id", deleteHackathonbyId);
router.get("/search", getHackathonSearch);

// get employee-hackathon
// router.get("/getEmployeeHackathon/:id", findEmployeeHackById);

export default router;
