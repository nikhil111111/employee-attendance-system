📘 Employee Attendance System

A full-stack Employee Attendance System that allows employees to punch-in and punch-out once per day, while admins can view attendance records, apply filters, and analyze attendance statistics via a dashboard.

🚀 Tech Stack
Frontend

React.js (Vite)

React Router DOM

Axios

Day.js

Backend

Node.js

Express.js

Sequelize ORM

PostgreSQL

Tools

Postman (API testing)

Git & GitHub

✨ Features
👤 Employee Management

Add employees from frontend

Fetch employee list dynamically

⏱ Attendance Tracking

Punch-in and punch-out once per day per employee

Automatic calculation of:

Punch-in time

Punch-out time

Total working hours

Punctuality status

🕘 Punctuality Rules
Punch-In Time	Status
Before 9:00 AM	Early
9:00 AM – 9:10 AM	On-Time
After 9:10 AM	Late
📊 Analytics Dashboard

Total employees

Present today

On-time count

Late count

Attendance rate (%)

Clickable cards to filter attendance records

📋 Attendance Records

Date filter (calendar)

Employee name search

Status filter (early / on-time / late)

Real-time table updates

🧭 Application Flow

Admin adds employees

Employee punches in / punches out

Backend calculates punctuality and total hours

Dashboard shows analytics

Clicking analytics cards filters attendance table

Admin can search and filter records

⚙️ Setup Instructions
1️⃣ Backend Setup
cd backend
npm install
npm run dev


Create a .env file:

PORT=5000
DB_NAME=attendance_db
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost

2️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173


Backend runs on:

http://localhost:5000

🔌 API Endpoints
Employee APIs

POST /api/employees → Add employee

GET /api/employees → Get all employees

Attendance APIs

POST /api/attendance/punch-in

POST /api/attendance/punch-out

GET /api/attendance

GET /api/attendance/analytics

🧪 Postman API Testing

All APIs were tested using Postman including:

Employee creation

Punch-in

Punch-out

Duplicate punch prevention

Attendance listing with filters

Analytics data

📸 Screenshots

![Frontend Dashboard](./frontend/public/frontend%20screenshot%201.png)

![Get Attendance by Status (Postman)](./frontend/public/get%20attendance%20by%20status.jpg)

![Punch Out API (Postman)](./frontend/public/punchout%20screenshot.jpg)

![Punch In API (Postman)](./frontend/public/punchin%20postman%20scrrenshot.jpg)

![Get Attendance by Status Filter](./frontend/public/get%20attendance%20by%20status.jpg)

![Frontend Attendance Page](./frontend/public/frontend%20screenshot%201.png)

![Filter Attendance Based on Date](./frontend/public/filter%20attendance%20based%20on%20date.jpg)

![Analytics API Response (Postman)](./frontend/public/analytics%20postman%20scrrenshot.jpg)

![Already Punched In Error (Postman)](./frontend/public/already%20punch%20in%20postman%20screenshort.jpg)
