import db from "../models/index.js";
import {
  addHackathonService,
  getAllHackathonsService,
  getHackathonByIdService,
  getHackathonSearchService,
} from "../service/hackathon.service.js";
const { sequelize } = db.db;

const addHackathon = async (req, res, next) => {
  const { body } = req;
  await sequelize.transaction(async (t) => {
    return await addHackathonService(t, body);
  });
  res.status(201).send({
    success: true,
    message: "Inserted successfully!!!",
  });
  next();
};

const getAllHackathons = async (req, res, next) => {
  const transaction = await sequelize.transaction();
  const result = await getAllHackathonsService(transaction);

  res.status(200).send({
    success: true,
    message: result.length > 0 ? "Data Found!!!" : "No Data Found !!!",
    data: result,
  });
  next();
};

const getHackathonById = async (req, res, next) => {
  const { id } = req.params;
  console.log("VSM", req.params, id);
  const result = await sequelize.transaction(async (t) => {
    return await getHackathonByIdService(t, id);
  });
  res.status(200).send({
    success: true,
    message: result ? "Data Found!!!" : "No Data Found !!!",
    data: result,
  });
  console.log("controller result");
  next();
};

const getHackathonSearch = async (req, res, next) => {
  const { id } = req.params;
  console.log("VSM", req.params, id);
  var hackathonName = req.query.hackathonName;
  var techStack = req.query.techStack;

  console.log("hackathonName :", hackathonName);
  console.log("techStack :", techStack);

  const result = await sequelize.transaction(async (t) => {
    return await getHackathonSearchService(t, hackathonName, techStack);
  });
  res.status(200).send({
    success: true,
    message: result ? "Data Found!!!" : "No Data Found !!!",
    data: result,
  });
  console.log("controller result", result);
  next();
};

export { addHackathon, getAllHackathons, getHackathonById, getHackathonSearch };
