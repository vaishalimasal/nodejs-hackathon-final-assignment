import db from '../models/index.js';
const { sequelize, employee } = db.db;

const getAllEmployeesDao = async (t) => {
	return await employee.findAll({ transaction: t });
};

const getEmployeeByIdDao = async (t, employeeId) => {
	return await employee.findOne(
		{
			where: {
				employeeId,
			},
		},
		{ transaction: t }
	);
};

const updateEmployeeDao = async (t, employeeId, data) => {
	return await employee.update(
		{
			employeeName: data.employeeName	
		},
		{
			where: {
				employeeId,
			},
		},
		{ transaction: t }
	);
};

const deleteEmployeeDao = async (t, employeeId) => {
	return await employee.destroy(
		{
			where: {
				employeeId,
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
