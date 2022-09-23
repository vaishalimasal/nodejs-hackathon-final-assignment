import db from "../models/index.js";
const { sequelize, hackathon } = db.db;

const addHackathonDao = async (t, data) => {
  await hackathon.create(data, { transaction: t });
};

const getAllHackathonsDao = async () => {
  return await hackathon.findAll({ });
};

export { addHackathonDao, getAllHackathonsDao };
