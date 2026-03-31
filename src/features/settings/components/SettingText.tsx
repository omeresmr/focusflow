interface SettingTextProps {
  title: string;
  description: string;
}

export default function SettingText({ title, description }: SettingTextProps) {
  return (
    <div className="setting-text-con">
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
