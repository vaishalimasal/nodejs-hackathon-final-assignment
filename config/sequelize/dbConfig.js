export default {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "password",
  DB: "testdb_hackathon",
  // HOST: "localhost",
  // USER: "root",
  // PASSWORD: "password",
  // DB: "testdb_hackathon",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
