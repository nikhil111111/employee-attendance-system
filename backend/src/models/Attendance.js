const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Attendance = sequelize.define(
  "Attendance",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    // ✅ Explicit FK column (MANDATORY)
    EmployeeId: {
      type: DataTypes.UUID,
      allowNull: false,
    },

    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    punchIn: {
      type: DataTypes.DATE,
    },

    punchOut: {
      type: DataTypes.DATE,
    },

    totalHours: {
      type: DataTypes.FLOAT,
    },

    status: {
      type: DataTypes.ENUM("early", "on-time", "late"),
    },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["EmployeeId", "date"],
      },
    ],
  }
);

module.exports = Attendance;
