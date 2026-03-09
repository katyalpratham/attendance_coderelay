import PropTypes from "prop-types";
import { Briefcase } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { workloadData } from "../data/dashboard.js";

function WorkloadChart({ data = workloadData }) {
  return (
    <div className="chart-wrapper">
      <h3 style={{ marginBottom: '1rem', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '8px', padding: '0 16px', paddingTop: '16px' }}>
        <Briefcase size={20} />
        Workload vs Capacity
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} unit="%" />
          <Tooltip formatter={(val) => `${val}%`} />
          <Legend />
          <Bar dataKey="workload"  name="Workload"  radius={[4, 4, 0, 0]} />
          <Bar dataKey="capacity"  name="Capacity"  radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

WorkloadChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name:     PropTypes.string.isRequired,
      workload: PropTypes.number.isRequired,
      capacity: PropTypes.number.isRequired,
    })
  ),
};

export default WorkloadChart;
