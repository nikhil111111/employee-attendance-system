import { useEffect, useState } from "react";
import { getAttendance } from "../api/attendance.api";
import AttendanceTable from "../components/AttendanceTable";
import PunchForm from "../components/PunchForm";
import { useSearchParams } from "react-router-dom";

export default function Attendance() {
    const [records, setRecords] = useState([]);
    const [filters, setFilters] = useState({
        date: "",
        status: "",
        name: "",
    });

    const [searchParams] = useSearchParams();

    useEffect(() => {
        const status = searchParams.get("status");
        const today = searchParams.get("today");

        const updatedFilters = { ...filters };

        if (status) updatedFilters.status = status;
        if (today) {
            updatedFilters.date = new Date().toISOString().split("T")[0];
        }

        setFilters(updatedFilters);
    }, [searchParams]);

    // Fetch attendance whenever filters get changed
    useEffect(() => {
        getAttendance(filters).then((res) => setRecords(res.data));
    }, [filters]);

    return (
        <div>
            <h2>Attendance Records</h2>
            <PunchForm />
            <br />
            <div style={{ marginBottom: 10 }}>
                <input
                    type="date"
                    value={filters.date}
                    onChange={(e) =>
                        setFilters({ ...filters, date: e.target.value })
                    }
                />
                <select value={filters.status} onChange={(e) => setFilters({ ...filters, status: e.target.value })}>
                    <option value="">All Status</option>
                    <option value="early">Early</option>
                    <option value="on-time">On Time</option>
                    <option value="late">Late</option>
                </select>

                <input
                    type="text"
                    placeholder="Search by employee name"
                    value={filters.name}
                    onChange={(e) =>
                        setFilters({ ...filters, name: e.target.value })
                    }
                />
            </div>
                    {/* attendance table */}
            <AttendanceTable records={records} />
        </div>
    );
}
