import { useState, useEffect, useCallback } from "react";
import { useOutletContext } from "react-router-dom";
import StatCard from "../components/cards/StatCard";
import Calendar from "../components/calendar/TeamCalendar";
import ImpactCard from "../components/cards/ImpactCard";
import LeaveTable from "../components/table/LeaveTable";
import { leaveRequestsData } from "../components/data/dashboard";
import StudentAverageChart from "../components/charts/StudentAverageChart";

export default function Dashboard() {

  const [leaves, setLeaves] = useState(leaveRequestsData);

  // Expose an updater function downstream so the Layout/Header can trigger this
  const generateRandomLeaves = useCallback(() => {
    const numToGenerate = Math.floor(Math.random() * 2) + 2; // 2 or 3
    const newLeaves = [];
    const firstNames = ["Emma", "Noah", "Liam", "Ava", "Isabella", "Ethan", "Mia", "Alexander"];
    const lastNames = ["Smith", "Patel", "Garcia", "Kim", "Nguyen", "Muller", "Okafor", "Rossi"];
    const roles = ["Frontend Developer", "Backend Developer", "QA Engineer", "Product Manager", "Designer"];
    const types = ["Vacation", "Sick Leave", "Personal", "Medical"];

    for (let i = 0; i < numToGenerate; i++) {
      const startDay = Math.floor(Math.random() * 25) + 1;
      const durationDays = Math.floor(Math.random() * 3);
      const duration = durationDays === 0 ? `May ${startDay}` : `May ${startDay}-${startDay + durationDays}`;
      
      newLeaves.push({
        id: Date.now() + i, // Unique ID
        name: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
        role: roles[Math.floor(Math.random() * roles.length)],
        type: types[Math.floor(Math.random() * types.length)],
        duration: duration,
        status: "pending",
        avatar: `https://i.pravatar.cc/40?img=${Math.floor(Math.random() * 70)}`
      });
    }

    setLeaves(prev => [...newLeaves, ...prev]);
  }, []);

  // Wire into the Outlet Context so Layout can trigger this
  const { setHeaderAction } = useOutletContext() || {};
  
  useEffect(() => {
    if (setHeaderAction) {
      setHeaderAction(() => generateRandomLeaves);
    }
    return () => {
      // Cleanup the action when unmounting
      if (setHeaderAction) setHeaderAction(null);
    }
  }, [setHeaderAction, generateRandomLeaves]);

  const handleApprove = (id) => {
    setLeaves(prev =>
      prev.map(l =>
        l.id === id ? { ...l, status: "approved" } : l
      )
    );
  };

  const handleReject = (id) => {
    setLeaves(prev =>
      prev.map(l =>
        l.id === id ? { ...l, status: "rejected" } : l
      )
    );
  };

  // Calculate daily attendance metrics (mocking "today" as May 18th)
  const totalMembers = 24;
  const today = 18;
  
  // Count how many users have an approved leave that overlaps with "today"
  const absentToday = leaves.filter(leave => {
    if (leave.status !== "approved" && leave.status !== "completed") return false;
    const match = leave.duration.match(/May\s+(\d+)(?:[-–]+(\d+))?/);
    if (!match) return false;
    const start = parseInt(match[1], 10);
    const end = match[2] ? parseInt(match[2], 10) : start;
    return today >= start && today <= end;
  }).length;

  const presentToday = totalMembers - absentToday;
  const teamCapacity = Math.round((presentToday / totalMembers) * 100) + "%";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <div className="stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '20px' }}>
        <StatCard title="Total Members" value={totalMembers} />
        <StatCard title="Present Today" value={presentToday} />
        <StatCard title="Absent Today" value={absentToday} />
        <StatCard title="Team Capacity" value={teamCapacity} />
      </div>

      <div className="grid-2">
        <div className="card">
          <StudentAverageChart leaves={leaves} />
        </div>

        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <h3 style={{ color: 'var(--text)', marginBottom: '5px' }}>Leave Impact Analysis</h3>
          <ImpactCard type="high" value={75} />
          <ImpactCard type="medium" value={40} />
          <ImpactCard type="low" value={15} />
        </div>
      </div>

      <div className="card">
        <LeaveTable
          leaves={leaves}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      </div>

      <div className="card">
        <Calendar leaves={leaves} />
      </div>
    </div>
  );
}