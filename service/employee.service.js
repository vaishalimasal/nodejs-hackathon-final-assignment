import {
	addEmployeeDao,
	deleteEmployeeDao,
	getAllEmployeesDao,
	getEmployeeByIdDao,
	updateEmployeeDao,
	 findEmployeeHackByIdDao,
	 findEmployeeParticipantByIdDao
} from '../dao/employee.js';
const getAllEmployeesService = async (t) => await getAllEmployeesDao(t);
const getEmployeeByIdService = async (t, id) => await getEmployeeByIdDao(t, id);
const deleteEmployeeService = async (t, id) => await deleteEmployeeDao(t, id);
const addEmployeeService = async (t, data) => await addEmployeeDao(t, data);
const updateEmployeeService = async (t, id, data) =>
	await updateEmployeeDao(t, id, data);

const findEmployeeHackByIdService = async (t, id) => await findEmployeeHackByIdDao(t, id);

const findEmployeeParticipantByIdService = async (t, id) => await findEmployeeParticipantByIdDao(t, id);

	

export {
	getAllEmployeesService,
	getEmployeeByIdService,
	addEmployeeService,
	updateEmployeeService,
	deleteEmployeeService,
	findEmployeeHackByIdService,
	findEmployeeParticipantByIdService
};
