require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB, sequelize } = require("./config/db");

// load models + associations BEFORE sync
require("./models");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// ✅ CORRECT ROUTES
app.use("/api/employees", require("./routes/employee.routes"));
app.use("/api/attendance", require("./routes/attendance.routes"));

// ⚠️ force:true ONLY FOR FIRST RUN
sequelize.sync({ force: true }).then(() => {
  console.log("DB synced");
  app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
  );
});
