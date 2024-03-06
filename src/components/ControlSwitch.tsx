import { useState } from "react";

export default function ControlSwitch() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div
      className={`w-[48px] h-[24px] bg-slate-400 rounded-full flex items-center px-1 ${
        checked ? "" : "toggleDark"
      }`}
      onClick={handleChange}
    >
      <span
        className={`w-[18px] h-[18px] rounded-full transition-transform duration-500 transform ${
          checked ? "translate-x-5  bg-white" : "translate-x-0 bg-black"
        }`}
      ></span>
    </div>
  );
}
