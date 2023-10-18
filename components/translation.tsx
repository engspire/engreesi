import { useState } from 'react';

export function Translation({ children }) {
  const [display, setDisplay] = useState(false);

  function handleClick() {
    setDisplay(!display);
  }

  return (
    <div>
      <button onClick={handleClick} className="my-2 text-[#5b8ec9] text-sm">
        {display ? "🔽 Hide" : "▶️ Show"} translation
      </button>
      <div className={display ? "block" : "hidden"}>
        {children}
      </div>
    </div>
  );
}
