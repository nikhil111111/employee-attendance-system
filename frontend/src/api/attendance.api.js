import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api",
});

export const addEmployee = (name) =>
    API.post("/employees", { name });

export const punchIn = (employeeId) =>
    API.post("/attendance/punch-in", { employeeId });

export const punchOut = (employeeId) =>
    API.post("/attendance/punch-out", { employeeId });

export const getAttendance = (params) =>
    API.get("/attendance", { params });

export const getAnalytics = () =>
    API.get("/attendance/analytics");

export const getEmployees = () =>
    API.get("/employees");
