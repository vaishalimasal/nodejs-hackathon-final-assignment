import Sequelize from "sequelize";
import dbConfig from "../config/sequelize/dbConfig.js";
import Employee from "./employee.js";
import Hackathon from "./hackathon.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employee = Employee(sequelize, Sequelize);
db.hackathon = Hackathon(sequelize, Sequelize);

// 1 to Many Relation

db.employee.hasMany(db.hackathon, {
   foreignKey: "employeeId",
  as: "hackathon"
});

db.hackathon.belongsTo(db.employee, {
  foreignKey: "employeeId",
  as: "employee",
});


export default { db };
