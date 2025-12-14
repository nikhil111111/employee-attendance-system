import { useNavigate } from "react-router-dom";

export default function AnalyticsCards({ data }) {
    const navigate = useNavigate();

    const card = (label, value, filter) => (
        <div
            onClick={() => navigate(`/attendance${filter}`)}
            style={{
                border: "1px solid #ccc",
                padding: 15,
                cursor: "pointer",
                marginBottom: 10,
            }}
        >
            <strong>{label}</strong>
            <div>{value}</div>
        </div>
    );

    return (
        <>
            {card("Total Employees", data.totalEmployees, "")}
            {card("Present Today", data.presentToday, "?today=true")}
            {card("On Time", data.onTime, "?status=on-time")}
            {card("Late", data.late, "?status=late")}
            {card("Attendance Rate", `${data.attendanceRate}%`, "")}
        </>
    );
}
