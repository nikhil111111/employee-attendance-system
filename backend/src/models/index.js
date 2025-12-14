const Employee = require("./Employee");
const Attendance = require("./Attendance");

// Associations
Employee.hasMany(Attendance, { foreignKey: "EmployeeId" });
Attendance.belongsTo(Employee, { foreignKey: "EmployeeId" });

module.exports = {
  Employee,
  Attendance,
};
