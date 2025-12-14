const router = require("express").Router();
const {
  punchIn,
  punchOut,
  getAttendance,
  analytics,
} = require("../controller/attendance.controller");

// Employee punches in
router.post("/punch-in", punchIn);

// Employee punches out
router.post("/punch-out", punchOut);

// Get attendance records with filters
// ?date=YYYY-MM-DD
// ?status=early | on-time | late
// ?name=Employee Name
router.get("/", getAttendance);

// Analytics dashboard data
router.get("/analytics", analytics);

module.exports = router;
