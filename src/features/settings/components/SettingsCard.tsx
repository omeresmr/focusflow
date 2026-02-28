export default function SettingsCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="card flex-col">{children}</div>;
}
