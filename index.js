import bodyParser from "body-parser";
import express from "express";
import db from "./models/index.js";
import employeesRoutes from "./router/employee.js";
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const PORT = 3000;

// routers
// const router = require('./routes/productRouter.js')
// app.use('/api/products', router)

app.use("/employee", employeesRoutes);

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
