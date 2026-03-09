export default function Students() {
  return (
    <div className="card">
      <h2>Students List</h2>
      <p>Here you can view and manage the students' attendance records.</p>
      {/* Table could go here */}
      <table style={{ width: "100%", marginTop: "1rem", textAlign: "left" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <th>Name</th>
            <th>Roll No</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jane Doe</td>
            <td>101</td>
            <td><span style={{ color: "green" }}>Present</span></td>
          </tr>
          <tr>
            <td>John Smith</td>
            <td>102</td>
            <td><span style={{ color: "red" }}>Absent</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
