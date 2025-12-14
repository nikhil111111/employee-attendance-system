const { Attendance, Employee } = require("../models");
const getPunctuality = require("../utils/punctuality");
const dayjs = require("dayjs");

// -------------------
// Punch In
// -------------------
exports.punchIn = async (req, res) => {
  try {
    const { employeeId } = req.body;
    const today = dayjs().format("YYYY-MM-DD");

    // Check employee exists
    const employee = await Employee.findByPk(employeeId);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const punchInTime = new Date();
    const status = getPunctuality(punchInTime);

    const record = await Attendance.create({
      EmployeeId: employeeId,
      date: today,
      punchIn: punchInTime,
      status,
    });

    res.status(201).json(record);
  } catch (err) {
    // ✅ Handle duplicate punch-in (unique constraint)
    if (err.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .json({ message: "Already punched in for today" });
    }

    console.error("Punch-in error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// -------------------
// Punch Out
// -------------------
exports.punchOut = async (req, res) => {
  try {
    const { employeeId } = req.body;
    const today = dayjs().format("YYYY-MM-DD");

    const record = await Attendance.findOne({
      where: { EmployeeId: employeeId, date: today },
    });

    if (!record) {
      return res.status(404).json({ message: "No punch-in found for today" });
    }

    if (record.punchOut) {
      return res.status(400).json({ message: "Already punched out" });
    }

    record.punchOut = new Date();
    record.totalHours =
      (record.punchOut - record.punchIn) / (1000 * 60 * 60);

    await record.save();
    res.json(record);
  } catch (err) {
    console.error("Punch-out error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// -------------------
// Attendance List
// -------------------
exports.getAttendance = async (req, res) => {
  try {
    const { date, status, name } = req.query;

    const where = {};
    if (date) where.date = date;
    if (status) where.status = status;

    const records = await Attendance.findAll({
      where,
      include: {
        model: Employee,
        where: name ? { name } : undefined,
      },
      order: [["date", "DESC"]],
    });

    res.json(records);
  } catch (err) {
    console.error("Get attendance error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// -------------------
// Analytics
// -------------------
exports.analytics = async (req, res) => {
  try {
    const today = dayjs().format("YYYY-MM-DD");

    const totalEmployees = await Employee.count();
    const presentToday = await Attendance.count({ where: { date: today } });
    const onTime = await Attendance.count({ where: { status: "on-time" } });
    const late = await Attendance.count({ where: { status: "late" } });

    res.json({
      totalEmployees,
      presentToday,
      onTime,
      late,
      attendanceRate:
        totalEmployees === 0
          ? "0.00"
          : ((presentToday / totalEmployees) * 100).toFixed(2),
    });
  } catch (err) {
    console.error("Analytics error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
