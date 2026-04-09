interface SettingsHeaderProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function SettingsHeader({
  title,
  description,
  icon,
}: SettingsHeaderProps) {
  return (
    <div className="settings-heading">
      {icon}
      <div className="settings-heading-text">
        <p className="text-base font-bold">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
