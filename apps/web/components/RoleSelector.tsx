"use client";

export type Role =
  | "user"
  | "guardian"
  | "volunteer";

type Props = {
  role: Role;
  setRole: (role: Role) => void;
};

export default function RoleSelector({
  role,
  setRole,
}: Props) {
  const roles = [
    {
      id: "user" as Role,
      icon: "👤",
      name: "User",
    },
    {
      id: "guardian" as Role,
      icon: "🛡️",
      name: "Guardian",
    },
    {
      id: "volunteer" as Role,
      icon: "🤝",
      name: "Volunteer",
    },
  ];

  return (
    <div className="role-grid">
      {roles.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`role-button ${
            role === item.id ? "selected" : ""
          }`}
          onClick={() => setRole(item.id)}
        >
          <span className="role-icon">
            {item.icon}
          </span>

          <span className="role-name">
            {item.name}
          </span>
        </button>
      ))}
    </div>
  );
}