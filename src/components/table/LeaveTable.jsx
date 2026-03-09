import { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { FileText } from "lucide-react";
import LeaveRow from "./LeaveRow.jsx";

function LeaveTable({ leaves, onApprove, onReject }) {
  const [search,     setSearch]     = useState("");
  const [filterType, setFilterType] = useState("all");

  // Derive unique leave types for the filter dropdown
  const leaveTypes = useMemo(
    () => ["all", ...new Set(leaves.map((l) => l.type))],
    [leaves]
  );

  // Filter by search query and selected type
  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return leaves.filter((item) => {
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.role.toLowerCase().includes(query);
      const matchesType =
        filterType === "all" || item.type === filterType;
      return matchesSearch && matchesType;
    });
  }, [leaves, search, filterType]);

  return (
    <div className="table-card">
      {/* ── Header ── */}
      <div className="table-header">
        <h3 className="table-header__title" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <FileText size={20} />
          Pending Leave Requests
        </h3>

        <div className="table-actions">
          <input
            className="table-actions__search"
            placeholder="Search by name or role…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search leave requests"
          />

          <select
            className="table-actions__filter"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            aria-label="Filter by leave type"
          >
            {leaveTypes.map((type) => (
              <option key={type} value={type}>
                {type === "all" ? "All types" : type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ── Table ── */}
      <div className="table-scroll">
        <table className="leave-table">
          <thead>
            <tr>
              <th scope="col">Avatar</th>
              <th scope="col">Name</th>
              <th scope="col">Role</th>
              <th scope="col">Leave Type</th>
              <th scope="col">Duration</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <LeaveRow
                  key={item.id}
                  id={item.id}
                  employee={item.name}
                  role={item.role}
                  avatar={item.avatar}
                  type={item.type}
                  duration={item.duration}
                  status={item.status}
                  onApprove={onApprove}
                  onReject={onReject}
                />
              ))
            ) : (
              <tr>
                <td colSpan={7} className="table-empty">
                  No requests match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

LeaveTable.propTypes = {
  leaves:    PropTypes.arrayOf(
    PropTypes.shape({
      id:       PropTypes.number.isRequired,
      name:     PropTypes.string.isRequired,
      role:     PropTypes.string.isRequired,
      type:     PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      status:   PropTypes.string.isRequired,
      avatar:   PropTypes.string.isRequired,
    })
  ).isRequired,
  onApprove: PropTypes.func.isRequired,
  onReject:  PropTypes.func.isRequired,
};

export default LeaveTable;
