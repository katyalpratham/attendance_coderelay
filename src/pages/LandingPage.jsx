import { useNavigate } from "react-router-dom";
import ParticlesBackground from "../components/layout/ParticlesBackground";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "var(--bg)" }}>
      {/* Background Particles */}
      <ParticlesBackground />

      {/* Main Content */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "2rem" }}>
        <h1 style={{ fontSize: "4rem", fontWeight: "800", marginBottom: "1rem", color: "var(--primary)", textShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>LeaveSync</h1>
        <p style={{ fontSize: "1.2rem", color: "var(--muted)", marginBottom: "2rem", maxWidth: "600px", margin: "0 auto 2rem auto" }}>
          The intelligent, seamless way to track, request, and manage team attendance and absences.
        </p>

        <button 
          className="primary-btn" 
          onClick={() => navigate("/dashboard")}
          style={{ padding: "16px 36px", fontSize: "1.2rem", borderRadius: "30px", boxShadow: "0 8px 25px rgba(139, 92, 246, 0.5)" }}
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
