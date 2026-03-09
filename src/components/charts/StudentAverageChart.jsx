import PropTypes from "prop-types";
import { Users } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

export default function StudentAverageChart({ leaves = [] }) {
  
  // Group leaves by Role and tally statuses
  const roleStats = leaves.reduce((acc, leave) => {
    if (!acc[leave.role]) {
      acc[leave.role] = { name: leave.role, pending: 0, approved: 0, rejected: 0 };
    }
    const status = leave.status === "completed" ? "approved" : leave.status;
    acc[leave.role][status] += 1;
    return acc;
  }, {});

  const data = Object.values(roleStats);

  return (
    <div style={{ width: '100%', height: 300 }}>
      <h3 style={{ marginBottom: '1rem', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Users size={20} />
        Leave Analysis by Role
      </h3>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" opacity={0.6} />
          <XAxis dataKey="name" tick={{fill: 'var(--text)', fontSize: 12}} axisLine={{ stroke: 'var(--border)' }} tickLine={false} />
          <YAxis tick={{fill: 'var(--text)'}} axisLine={false} tickLine={false} allowDecimals={false} />
          <Tooltip 
            contentStyle={{ backgroundColor: 'var(--card)', borderRadius: '8px', border: '1px solid var(--border)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}
            cursor={{fill: 'rgba(0,0,0,0.02)'}}
          />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            wrapperStyle={{ color: 'var(--text)', fontWeight: 'bold', paddingTop: '10px' }}
          />
          <Bar dataKey="approved" stackId="a" fill="#16a34a" name="Approved" barSize={32} />
          <Bar dataKey="pending" stackId="a" fill="#f59e0b" name="Pending" />
          <Bar dataKey="rejected" stackId="a" fill="#ef4444" name="Rejected" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

StudentAverageChart.propTypes = {
  leaves: PropTypes.array,
};
