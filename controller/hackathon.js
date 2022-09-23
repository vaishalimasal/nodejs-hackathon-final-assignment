import db from '../models/index.js';
import {
	addHackathonService,getAllHackathonsService
} from '../service/hackathon.service.js';
const { sequelize } = db.db;


const addHackathon = async (req, res, next) => {
	const { body } = req;
	await sequelize.transaction(async (t) => {
		return await addHackathonService(t, body);
	});
	res.status(201).send({
		success: true,
		message: 'Inserted successfully!!!',
	});
	next();
};

const getAllHackathons = async (req, res, next) => {
	const result = await sequelize.transaction(async (t) => {
		return await getAllHackathonsService(t);
	});
	res.status(200).send({
		success: true,
		message: result.length > 0 ? 'Data Found!!!' : 'No Data Found !!!',
		data: result,
	});
	next();
};



export { addHackathon,getAllHackathons};
