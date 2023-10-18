import { useState } from 'react';

export default function Translation({ children }) {
  const [display, setDisplay] = useState(false);

  function handleClick() {
    setDisplay(!display);
  }

  return (
    <div>
      <button onClick={handleClick} className="my-2 underline">
        {display ? "Hide" : "Show"} translation
      </button>
      <div className={display ? "block" : "hidden"}>
        {children}
      </div>
    </div>
  );
}
