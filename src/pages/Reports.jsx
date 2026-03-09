import AttendancePieChart from "../components/charts/AttendancePieChart";
import MonthlyTrendChart from "../components/charts/MonthlyTrendChart";
import { leaveRequestsData } from "../components/data/dashboard";

export default function Reports() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div className="card">
        <h2>Attendance Reports</h2>
        <p style={{ color: 'var(--muted)', marginTop: '8px' }}>
          Overview of team leave status distribution and monthly trends.
        </p>
      </div>

      <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <div className="card">
          <AttendancePieChart leaves={leaveRequestsData} />
        </div>
        <div className="card">
          <MonthlyTrendChart leaves={leaveRequestsData} />
        </div>
      </div>
    </div>
  );
}
