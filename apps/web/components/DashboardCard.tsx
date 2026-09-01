import { ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
}

export function DashboardCard({
  title,
  value,
  description,
  icon
}: DashboardCardProps) {
  return (
    <div className="dashboardCard">
      <div className="cardTop">
        <div>
          <p className="cardLabel">
            {title}
          </p>

          <h2>{value}</h2>
        </div>

        <div className="cardIcon">
          {icon}
        </div>
      </div>

      <p className="cardDescription">
        {description}
      </p>
    </div>
  );
}