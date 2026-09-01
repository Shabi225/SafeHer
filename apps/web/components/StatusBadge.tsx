interface StatusBadgeProps {
  status: "safe" | "inactive" | "alert";
}

export function StatusBadge({
  status
}: StatusBadgeProps) {
  const labels = {
    safe: "Safe",
    inactive: "No active alert",
    alert: "Emergency alert"
  };

  return (
    <span
      className={`statusBadge ${status}`}
    >
      {labels[status]}
    </span>
  );
}