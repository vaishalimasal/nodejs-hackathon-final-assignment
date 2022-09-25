import bodyParser from "body-parser";
import express from "express";
import db from "./models/index.js";
import employeesRoutes from "./router/employee.js";
import hackathonRoutes from "./router/hackathon.js";
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const PORT = 3000;

// routers
app.use("/employee", employeesRoutes);
app.use("/hackathon", hackathonRoutes);

console.log(db.db.sequelize);
db.db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
app.listen(PORT, () => console.log("Server is running on", PORT));
