export default function SettingNumberInput({
  format = 'min',
}: {
  format?: string;
}) {
  return (
    <>
      <input className="setting-number-input" type="number" />
      <p className="text-muted-foreground">{format}</p>
    </>
  );
}
