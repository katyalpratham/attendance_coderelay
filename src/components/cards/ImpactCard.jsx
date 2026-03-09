import PropTypes from "prop-types";
import { Target } from "lucide-react";

/**
 * Displays an impact level with a proportional progress bar.
 *
 * @param {object} props
 * @param {"low"|"medium"|"high"} props.type   - Impact level.
 * @param {number}                props.value  - Progress percentage 0–100.
 */
function ImpactCard({ type, value }) {
  const clampedValue = Math.min(100, Math.max(0, value || 0));
  
  const getGradient = (t) => {
    switch(t) {
      case "high": return "linear-gradient(90deg, #ef4444 0%, #b91c1c 100%)";
      case "medium": return "linear-gradient(90deg, #f59e0b 0%, #b45309 100%)";
      case "low": return "linear-gradient(90deg, #22c55e 0%, #15803d 100%)";
      default: return "var(--border)";
    }
  };

  return (
    <div style={{ marginBottom: "16px", padding: "10px", background: "var(--bg)", borderRadius: "8px", border: "1px solid var(--border)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
        <span style={{ fontWeight: 600, color: "var(--text)", textTransform: "capitalize", display: "flex", alignItems: "center", gap: "8px" }}>
          <Target size={18} />
          {type} Impact
        </span>
        <span style={{ fontWeight: "bold", color: "var(--muted)", fontSize: "14px" }}>
          {clampedValue}%
        </span>
      </div>

      <div
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ 
          width: "100%", 
          height: "10px", 
          background: "var(--border)", 
          borderRadius: "10px", 
          overflow: "hidden" 
        }}
      >
        <div
          style={{ 
            width: `${clampedValue}%`, 
            height: "100%", 
            background: getGradient(type),
            borderRadius: "10px",
            transition: "width 0.8s ease-in-out",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
          }}
        />
      </div>
    </div>
  );
}

ImpactCard.propTypes = {
  type:  PropTypes.oneOf(["low", "medium", "high"]).isRequired,
  value: PropTypes.number,
};

export default ImpactCard;
