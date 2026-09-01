"use client";

import { useRouter } from "next/navigation";

type Props = {
  icon: string;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
}: Props) {
  const router = useRouter();

  return (
    <button
      className="feature-card"
      onClick={() => router.push("/login")}
      style={{
        border: "1px solid var(--border)",
        textAlign: "left",
        width: "100%",
      }}
    >
      <div className="feature-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="feature-arrow">
        →
      </div>
    </button>
  );
}