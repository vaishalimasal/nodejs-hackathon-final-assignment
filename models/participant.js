export default (sequelize, Sequelize) => {
    const Participant = sequelize.define("Participant", {
      participantName: {
        type: Sequelize.STRING,
      },
      participantId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    });
    return Participant;
  };
  