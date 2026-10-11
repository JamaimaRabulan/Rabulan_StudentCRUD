
import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";

export const Student = sequelize.define("Student", {
  FirstName: {type: DataTypes.STRING, allowNull: false},
  LastName: {type: DataTypes.STRING, allowNull: false},
  MiddleName: {type: DataTypes.STRING, allowNull: true},
  Program: {type: DataTypes.STRING, allowNull: false},
  YearLevel: {type: DataTypes.INTEGER, allowNull: false},
  Section: {type: DataTypes.STRING, allowNull: false}
});
