type Props = {
  icon: string;
  title: string;
  description: string;
};

export default function ToolCard({
  icon,
  title,
  description,
}: Props) {
  return (
    <div className="tool-card">
      <div className="tool-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}