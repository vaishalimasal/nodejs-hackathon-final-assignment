import db from "../models/index.js";
import {
//   findEmployeeHackByIdService,
deleteEmployeeHackByIdService
} from "../service/employee_hackathon.js";
const { sequelize } = db.db;

// connect one to many relation Product and Reviews
//delete all hackathons
const deleteEmployeeHackById = async (req, res, next) => {
  const { id } = req.params;
  const result = await sequelize.transaction(async (t) => {
    return await deleteEmployeeHackByIdService(t, id);
  });
  res.status(200).send({
    success: true,
    message: result ? "Deleted successfuly!!!" : "No Data Found !!!",
    data: result,
  });
  next();
};
//  //get all hackathons
// const findEmployeeHackById = async (req, res, next) => {
//   const { id } = req.params;
//   const result = await sequelize.transaction(async (t) => {
//     return await findEmployeeHackByIdService(t, id);
//   });
//   res.status(200).send({
//     success: true,
//     message: result ? "Data Found!!!" : "No Data Found !!!",
//     data: result,
//   });
//   next();
// };

export {
  //   findEmployeeHackById,
  deleteEmployeeHackById,
};
