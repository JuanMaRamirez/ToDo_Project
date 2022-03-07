//import db from "../database/db";
import DataTypes from "sequelize";
import db from "../database/db.js";

const TodosModel = db.define("todo", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  content: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(10),
    defaultValue: "active",
    allowNull: false,
  },
});

export default TodosModel;
