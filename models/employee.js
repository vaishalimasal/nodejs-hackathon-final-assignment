export default (sequelize, Sequelize) => {
  const Employee = sequelize.define("employee", {
    employeeName: {
      type: Sequelize.STRING,
    },
    employeeId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  });


  return Employee;
};
