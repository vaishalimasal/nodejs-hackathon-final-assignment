import db from "../models/index.js";
const { sequelize, employee } = db.db;

// const deleteEmployeeHackByIdDao = async (t, id) => {
//   const res =
//   //return await 
//   await hackathon.destroy({
//     where: { hackathonId: Number(id) },
//     include: ["employee"],
//     transaction: t,
//   });
//   return res;
// };


const deleteEmployeeHackByIdDao = async (t, id) => {
  const res =
  //return await 
  await hackathon.destroy({
    where: { hackathonId: Number(id) },
    transaction: t,
  });
  return res;
}


// const findEmployeeHackByIdDao = async (t, id) => {
// const res =
//   //return await 
//   await employee.findOne({
//     where: { employeeId: Number(id) },
//     include: ["hackathon"],
//     transaction: t,
//   });

//   console.log("CHECK", res);
//   return res;
// };

export {
//   indEmployeeHackByIdDao,
deleteEmployeeHackByIdDao
};
