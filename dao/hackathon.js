import db from "../models/index.js";
const { sequelize, hackathon } = db.db;

const addHackathonDao = async (t, data) => {
  await hackathon.create(data, { transaction: t });
};

const getAllHackathonsDao = async (t) => {
  return await hackathon.findAll(
    //get all data with softDelete/paranooid
    {
      // paranoid:false
    },
    {
      transaction: t,
    }
  );
};

const getHackathonByIdDao = async (t, id) => {
  return await hackathon.findOne(
    {
      where: { hackathonId: id },
    },
    { transaction: t }
  );
};

const deleteHackathonbyIdDao = async (t, hackathonId) => {
  return await hackathon.destroy(
    //cancel data with softDelete/paranooid 
    {
      where: {
        hackathonId,
      },
    },
    { transaction: t }
  );
};

const getHackathonSearchServiceDao = async (t, hackathonName, techStack) => {
  var whereCondition = {};
  if (hackathonName != null) {
    whereCondition["hackathonName"] = hackathonName;
  }
  if (techStack != null) {
    whereCondition["techStack"] = techStack;
  }
  return await hackathon.findAll(
    {
      where: whereCondition,
    },
    { transaction: t }
  );
};
export {
  addHackathonDao,
  getAllHackathonsDao,
  getHackathonByIdDao,
  getHackathonSearchServiceDao,
  deleteHackathonbyIdDao,
};
