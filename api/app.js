import express from "express";
import cors from "cors";
//Models
//import TodosModel from "./models/TodoModel";

//Routers
import todoRouter from "./routes/routes.js";

//DB
import db from "./database/db.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/todos", todoRouter);

db.authenticate()
  .then(() => console.log("Database authenticated"))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.log(err));

app.listen(8000, () => {
  console.log("Express app running");
});
