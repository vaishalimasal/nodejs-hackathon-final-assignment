export default (sequelize, Sequelize) => {
  const Hackathon = sequelize.define("hackathon", {
    hackathonName: {
      type: Sequelize.STRING,
    },
    techStack: {
      type: Sequelize.STRING, // DataTypes.BOOLEAN
    }
  });
  // Players.associate = (models) => {
  //   Players.belongsTo(models.Teams, {
  //     foreignKey: "creatorId",
  //   });
  // };
  return Hackathon;
};
