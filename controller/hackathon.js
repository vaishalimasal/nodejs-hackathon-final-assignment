import db from '../models/index.js';
import {
	addHackathonService,getAllHackathonsService, getHackathonByIdService
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
	const transaction = await sequelize.transaction();
	const result = await getAllHackathonsService(transaction);

	res.status(200).send({
		success: true,
		message: result.length > 0 ? 'Data Found!!!' : 'No Data Found !!!',
		data: result,
	});
	next();
};

const getHackathonById = async (req, res, next) => {
	const { id } = req.params;
	const result = await sequelize.transaction(async (t) => {
		return await getEmployeeByIdService(t, id);
	});
	res.status(200).send({
		success: true,
		message: result ? 'Data Found!!!' : 'No Data Found !!!',
		data: result,
	});
	next();
};


export { addHackathon,getAllHackathons,getHackathonById};
