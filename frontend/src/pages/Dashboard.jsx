import { useEffect, useState } from "react";
import { getAnalytics } from "../api/attendance.api";
import AnalyticsCards from "../components/AnalyticsCards";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getAnalytics().then((res) => setData(res.data));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h2>Analytics Dashboard</h2>
      <AnalyticsCards data={data} />
    </div>
  );
}
