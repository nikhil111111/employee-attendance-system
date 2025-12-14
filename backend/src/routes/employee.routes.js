const router = require("express").Router();
const { Employee } = require("../models");

// Create employee
router.post("/", async (req, res) => {
  try {
    const employee = await Employee.create({
      name: req.body.name,
    });
    res.json(employee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all employees
router.get("/", async (req, res) => {
  const employees = await Employee.findAll();
  res.json(employees);
});

module.exports = router;
