import { useEffect, useState } from "react";
import {getEmployees,punchIn,punchOut} from "../api/attendance.api";
import AddEmployee from "./AddEmployee";

export default function PunchForm() {
    const [employees, setEmployees] = useState([]);
    const [selected, setSelected] = useState("");

    const loadEmployees = () => {
        getEmployees().then((res) => setEmployees(res.data));
    };

    useEffect(() => {
        loadEmployees();
    }, []);

    return (
        <div>
            <h3>Add Employee</h3>
            <AddEmployee onAdded={loadEmployees} />

            <br />

            <select value={selected} onChange={(e) => setSelected(e.target.value)}>
                <option value="">Select Employee</option>
                {employees.map((e) => (
                    <option key={e.id} value={e.id}>
                        {e.name}
                    </option>
                ))}
            </select>

            <button
                disabled={!selected}
                onClick={() => punchIn(selected)}
            >
                Punch In
            </button>

            <button
                disabled={!selected}
                onClick={() => punchOut(selected)}
            >
                Punch Out
            </button>
        </div>
    );
}
