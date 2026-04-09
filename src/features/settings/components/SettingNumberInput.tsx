interface SettingNumberInputProps {
  format?: string; // (mins, pomos)
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  defaultValue: number;
}
export default function SettingNumberInput({
  format = 'min', // min = minutes
  defaultValue,
  onChange,
}: SettingNumberInputProps) {
  return (
    <>
      <input
        className="setting-number-input"
        type="number"
        value={defaultValue}
        onChange={onChange}
      />
      <p className="text-muted-foreground">{format}</p>
    </>
  );
}
