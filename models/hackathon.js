export default (sequelize, Sequelize) => {
  const Hackathon = sequelize.define("hackathon", {
    hackathonName: {
      type: Sequelize.STRING,
    },
    hackathonId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    techStack: {
      type: Sequelize.STRING, // DataTypes.BOOLEAN
    },
    exprLevel: {
      type: Sequelize.INTEGER, // DataTypes.BOOLEAN
    },
    businessUnit: {
      type: Sequelize.STRING, // DataTypes.BOOLEAN
    },
    startDate: {
      type: Sequelize.DATE, // DataTypes.BOOLEAN
    },
    endDate: {
      type: Sequelize.DATE, // DataTypes.BOOLEAN
    },
    
  },
  {
    paranoid: true,
    deletedAt:"softDelete"  //custome delelete
  }
  );

  return Hackathon;
};
