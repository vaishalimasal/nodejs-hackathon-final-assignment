import {
	addEmployeeDao,
	deleteEmployeeDao,
	getAllEmployeesDao,
	getEmployeeByIdDao,
	updateEmployeeDao,
	// addHackathonDao
} from '../dao/employee.js';
const getAllEmployeesService = async (t) => await getAllEmployeesDao(t);
const getEmployeeByIdService = async (t, id) => await getEmployeeByIdDao(t, id);
const deleteEmployeeService = async (t, id) => await deleteEmployeeDao(t, id);
const addEmployeeService = async (t, data) => await addEmployeeDao(t, data);
const updateEmployeeService = async (t, id, data) =>
	await updateEmployeeDao(t, id, data);

	// const addHackathonService = async (t, data) => await addHackathonDao(t, data);

export {
	getAllEmployeesService,
	getEmployeeByIdService,
	addEmployeeService,
	updateEmployeeService,
	deleteEmployeeService,
	// addHackathonService
};
