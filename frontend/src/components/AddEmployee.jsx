import { useState } from "react";
import { addEmployee } from "../api/attendance.api";

export default function AddEmployee({ onAdded }) {
  const [name, setName] = useState("");

  const handleAdd = async () => {
    if (!name) return alert("Enter employee name");

    await addEmployee(name);
    setName("");
    alert("Employee added");
    onAdded();
  };

  return (
    <div>
      <input placeholder="Employee Name" value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={handleAdd}>Add Employee</button>
    </div>
  );
}
