export default function AttendanceTable({ records }) {
  if (!records || records.length === 0) {
    return <p>No attendance records found.</p>;
  }

  return (
    <table border="1" cellPadding="8" cellSpacing="0" style={{ width: "100%", marginTop: "10px" }}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Employee Name</th>
          <th>Status</th>
          <th>Punch In</th>
          <th>Punch Out</th>
          <th>Total Hours</th>
        </tr>
      </thead>

      <tbody>
        {records.map((record) => (
          <tr key={record.id}>
            <td>{record.date}</td>
            <td>{record.Employee?.name || "-"}</td>
            <td>{record.status}</td>
            <td>
              {record.punchIn
                ? new Date(record.punchIn).toLocaleTimeString()
                : "-"}
            </td>
            <td>
              {record.punchOut
                ? new Date(record.punchOut).toLocaleTimeString()
                : "-"}
            </td>
            <td>
              {record.totalHours
                ? record.totalHours.toFixed(2)
                : "-"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
