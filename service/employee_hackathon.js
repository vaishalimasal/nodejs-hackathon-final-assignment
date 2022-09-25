import {
	// findEmployeeHackByIdDao,
    deleteEmployeeHackByIdDao
} from '../dao/employee_hackathon.js';

const deleteEmployeeHackByIdService = async (t, id) => await deleteEmployeeHackByIdDao(t, id);

// const findEmployeeHackByIdService = async (t, id) => await findEmployeeHackByIdDao(t, id);

	

export {
	// findEmployeeHackByIdService,
    deleteEmployeeHackByIdService

};
