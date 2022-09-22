import db from '../models/index.js';
import {
	addEmployeeService,
	deleteEmployeeService,
	getAllEmployeesService,
	getEmployeeByIdService,
	updateEmployeeService,
} from '../service/employee.service.js';
const { sequelize } = db.db;

const getAllEmployees = async (req, res, next) => {
	const result = await sequelize.transaction(async (t) => {
		return await getAllEmployeesService(t);
	});
	res.status(200).send({
		success: true,
		message: result.length > 0 ? 'Data Found!!!' : 'No Data Found !!!',
		data: result,
	});
	next();
};

const getEmployeeById = async (req, res, next) => {
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

const deleteEmployee = async (req, res, next) => {
	const { id } = req.params;
	const result = await sequelize.transaction(async (t) => {
		return await deleteEmployeeService(t, id);
	});
	res.status(200).send({
		success: true,
		message: result ? 'Deleted successfuly!!!' : 'No Data Found !!!',
		data: result,
	});
	next();
};

const updateEmployee = async (req, res, next) => {
	const { body, params } = req;
	const { id } = params;

	await sequelize.transaction(async (t) => {
		return await updateEmployeeService(t, id, body);
	});
	res.status(200).send({
		success: true,
		message: 'Updated successfully !!!',
	});
	next();
};

const addEmployee = async (req, res, next) => {
	const { body } = req;
	await sequelize.transaction(async (t) => {
		return await addEmployeeService(t, body);
	});
	res.status(201).send({
		success: true,
		message: 'Inserted successfully!!!',
	});
	next();
};


export { getAllEmployees, getEmployeeById, addEmployee, updateEmployee, deleteEmployee };
