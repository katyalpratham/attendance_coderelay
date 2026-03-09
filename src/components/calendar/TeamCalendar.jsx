import PropTypes from "prop-types";
import { Calendar } from "lucide-react";

// Helper to extract days array from "May 15–19" or "May 18" strings
function getDaysFromDuration(durationStr) {
  const match = durationStr.match(/May\s+(\d+)(?:[-–]+(\d+))?/);
  if (!match) return [];
  const start = parseInt(match[1], 10);
  const end = match[2] ? parseInt(match[2], 10) : start;
  const days = [];
  for (let i = start; i <= end; i++) days.push(i);
  return days;
}

export default function TeamCalendar({ leaves = [] }) {
  // Generate a standard 31-day month layout
  const daysInMonth = 31;
  const today = 18; // Mocking today as May 18th for contextual rendering

  // Aggregate stats per day based on real leave data
  const calendarData = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    let pending = 0;
    let approved = 0;
    let rejected = 0;

    leaves.forEach(leave => {
      const activeDays = getDaysFromDuration(leave.duration);
      if (activeDays.includes(day)) {
        if (leave.status === "pending") pending++;
        if (leave.status === "approved" || leave.status === "completed") approved++;
        if (leave.status === "rejected") rejected++;
      }
    });

    return { day, pending, approved, rejected };
  });

  return (
    <div className="calendar-card" style={{ width: "100%" }}>
      <h3 style={{ marginBottom: "16px", color: "var(--text)", display: "flex", alignItems: "center", gap: "8px" }}>
        <Calendar size={20} />
        May 2026
      </h3>
      <div className="calendar-grid">
        {calendarData.map((data) => (
          <div className={`day ${data.day === today ? "today" : ""}`} key={data.day}>
            <div className="day-number">{data.day}</div>
            <div className="day-indicators">
              {data.pending > 0 && (
                <span className="indicator indicator-pending" title={`${data.pending} Pending`}>
                  {data.pending} P
                </span>
              )}
              {data.approved > 0 && (
                <span className="indicator indicator-approved" title={`${data.approved} Approved`}>
                  {data.approved} A
                </span>
              )}
              {data.rejected > 0 && (
                <span className="indicator indicator-rejected" title={`${data.rejected} Rejected`}>
                  {data.rejected} R
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

TeamCalendar.propTypes = {
  leaves: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
    })
  )
};