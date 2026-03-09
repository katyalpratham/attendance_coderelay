import PropTypes from "prop-types";
import { Activity } from "lucide-react";

function StatCard({ title, value, icon: Icon = Activity }) {
  return (
    <div className="card">
      <p className="card__label" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Icon size={16} />
        {title}
      </p>
      <h3 className="card__value">{value}</h3>
    </div>
  );
}

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.elementType,
};

export default StatCard;
