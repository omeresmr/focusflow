interface SettingContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function SettingContainer({
  children,
  className,
}: SettingContainerProps) {
  return <div className={`setting-con py-4 ${className}`}>{children}</div>;
}
