export default (sequelize, Sequelize) => {
  const Hackathon = sequelize.define("hackathon", {
    hackathonName: {
      type: Sequelize.STRING,
    },
    techStack: {
      type: Sequelize.STRING, // DataTypes.BOOLEAN
    }
  });

  // Hackathon.associate = (models) => {
  //   Hackathon.belongsTo(models.employee, {
  //     foreignKey: "emp_id",
  //     allowNull: false, 
  //     type: Sequelize.INTEGER
  //   });
  // };
  return Hackathon;
};
