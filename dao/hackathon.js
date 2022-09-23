import db from "../models/index.js";
const { sequelize, hackathon } = db.db;

const addHackathonDao = async (t, data) => {
  await hackathon.create(data, { transaction: t });
};

const getAllHackathonsDao = async (t) => hackathon.findAll({ transaction: t });

const getHackathonByIdDao = async (t, id) => {
	return await hackathon.findOne(
		{
			where: {
				id
			},
		},
		{ transaction: t }
	);
};

export { addHackathonDao, getAllHackathonsDao, getHackathonByIdDao};
