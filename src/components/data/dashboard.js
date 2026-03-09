// ─── Leave Requests ───────────────────────────────────────────────────────────
export const leaveRequestsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Frontend Developer",
    type: "Vacation",
    duration: "May 15–19",
    status: "pending",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Backend Developer",
    type: "Sick Leave",
    duration: "May 10–12",
    status: "pending",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX Designer",
    type: "Vacation",
    duration: "May 20–24",
    status: "pending",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
  {
    id: 4,
    name: "James Smith",
    role: "Product Manager",
    type: "Personal",
    duration: "May 18",
    status: "pending",
    avatar: "https://i.pravatar.cc/40?img=4",
  },
  {
    id: 5,
    name: "Olivia Williams",
    role: "QA Engineer",
    type: "Medical",
    duration: "May 22-23",
    status: "pending",
    avatar: "https://i.pravatar.cc/40?img=5",
  },
  {
    id: 6,
    name: "William Brown",
    role: "DevOps Engineer",
    type: "Vacation",
    duration: "May 25-28",
    status: "pending",
    avatar: "https://i.pravatar.cc/40?img=6",
  },
  {
    id: 7,
    name: "Sophia Davis",
    role: "Marketing Specialist",
    type: "Sick Leave",
    duration: "May 16-17",
    status: "pending",
    avatar: "https://i.pravatar.cc/40?img=7",
  },
  {
    id: 8,
    name: "Lucas Miller",
    role: "Frontend Developer",
    type: "Personal",
    duration: "May 19",
    status: "pending",
    avatar: "https://i.pravatar.cc/40?img=8",
  },
];

// ─── Workload Chart ───────────────────────────────────────────────────────────
export const workloadData = [
  { name: "Dev",       workload: 80, capacity: 100 },
  { name: "Design",    workload: 70, capacity: 100 },
  { name: "Marketing", workload: 65, capacity: 100 },
];

// ─── Team Calendar ────────────────────────────────────────────────────────────
export const CALENDAR_DAYS_TO_SHOW = 14;
export const CALENDAR_TODAY_INDEX  = 5; // 0-based index of "today" in the grid

export const calendarData = [
  { day: 1, pending: 1, approved: 2, rejected: 0 },
  { day: 2, pending: 0, approved: 1, rejected: 1 },
  { day: 3, pending: 2, approved: 0, rejected: 0 },
  { day: 4, pending: 0, approved: 3, rejected: 0 },
  { day: 5, pending: 1, approved: 1, rejected: 0 },
  { day: 6, pending: 3, approved: 2, rejected: 1 }, // Today
  { day: 7, pending: 0, approved: 0, rejected: 0 },
  { day: 8, pending: 2, approved: 1, rejected: 0 },
  { day: 9, pending: 0, approved: 0, rejected: 0 },
  { day: 10, pending: 1, approved: 1, rejected: 0 },
  { day: 11, pending: 0, approved: 4, rejected: 0 },
  { day: 12, pending: 0, approved: 0, rejected: 0 },
  { day: 13, pending: 1, approved: 0, rejected: 0 },
  { day: 14, pending: 0, approved: 2, rejected: 0 },
];

// ─── Sidebar Navigation ───────────────────────────────────────────────────────
export const navItems = [
  { label: "Dashboard",         href: "/dashboard" },
  { label: "Students",          href: "/dashboard/students" },
  { label: "Reports",           href: "/dashboard/reports" },
  { label: "Settings",          href: "/dashboard/settings" },
];

// ─── Impact Types ─────────────────────────────────────────────────────────────
// Values map to CSS class names and are used as display labels.
export const IMPACT_TYPES = /** @type {const} */ (["low", "medium", "high"]);
