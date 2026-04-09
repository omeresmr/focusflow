interface ToggleButtonProps {
  isToggled: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ToggleButton({
  isToggled,
  onClick,
}: ToggleButtonProps) {
  return (
    <button
      className={`toggle-button ${isToggled ? 'bg-brand-primary' : ''}`}
      onClick={onClick}
    >
      <div className={`toggle-button-circle toggle-${isToggled}`}></div>
    </button>
  );
}
