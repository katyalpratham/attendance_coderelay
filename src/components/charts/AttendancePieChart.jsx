import PropTypes from "prop-types";
import { PieChart as PieChartIcon } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

export default function AttendancePieChart({ leaves = [] }) {
  const pending = leaves.filter(l => l.status === "pending").length;
  const approved = leaves.filter(l => l.status === "approved" || l.status === "completed").length;
  const rejected = leaves.filter(l => l.status === "rejected").length;

  const data = [
    { name: 'Approved', value: approved },
    { name: 'Pending', value: pending },
    { name: 'Rejected', value: rejected },
  ];

  // Green for Approved, Yellow/Orange for Pending, Red for Rejected
  const COLORS = ['#16a34a', '#f59e0b', '#ef4444'];

  return (
    <div style={{ width: '100%', height: 300, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3 style={{ marginBottom: '1rem', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <PieChartIcon size={20} />
        Leave Status Distribution
      </h3>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ backgroundColor: 'var(--card)', borderRadius: '8px', border: '1px solid var(--border)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}
          />
          <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontWeight: '600', color: 'var(--text)' }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

AttendancePieChart.propTypes = {
  leaves: PropTypes.array,
};
