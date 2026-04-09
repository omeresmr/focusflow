import { useState } from 'react';

export default function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <button
      className={`toggle-button ${isToggled ? 'bg-brand-primary' : ''}`}
      onClick={() => setIsToggled((prev) => !prev)}
    >
      <div className={`toggle-button-circle toggle-${isToggled}`}></div>
    </button>
  );
}
