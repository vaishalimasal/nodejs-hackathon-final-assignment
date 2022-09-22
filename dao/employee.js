import db from '../models/index.js';
const { sequelize, employee } = db.db;

const getAllEmployeesDao = async (t) => {
	return await employee.findAll({ transaction: t });
};

const getEmployeeByIdDao = async (t, id) => {
	return await employee.findOne(
		{
			where: {
				id,
			},
		},
		{ transaction: t }
	);
};

const updateEmployeeDao = async (t, id, data) => {
	return await employee.update(
		{
			name: data.name,
			email: data.email,
		},
		{
			where: {
				id,
			},
		},
		{ transaction: t }
	);
};

const deleteEmployeeDao = async (t, id) => {
	return await employee.destroy(
		{
			where: {
				id,
			},
		},
		{ transaction: t }
	);
};

const addEmployeeDao = async (t, data) => {
	await employee.create(data, { transaction: t });
};

export {
	getAllEmployeesDao,
	getEmployeeByIdDao,
	addEmployeeDao,
	updateEmployeeDao,
	deleteEmployeeDao,
};
