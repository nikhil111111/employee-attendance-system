const dayjs = require("dayjs");

module.exports = function getPunctuality(punchIn) {
  const businessStart = dayjs().hour(9).minute(0);
  const graceEnd = businessStart.add(10, "minute");

  if (dayjs(punchIn).isBefore(businessStart)) return "early";
  if (dayjs(punchIn).isBefore(graceEnd)) return "on-time";
  return "late";
};
