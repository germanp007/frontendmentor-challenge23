import { useEffect, useState } from "react";

export default function ControlSwitch() {
  const [checked, setChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  //const [theme, setTheme] = useState("light");

  const handleChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setChecked(savedTheme === "dark");
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("theme", checked ? "dark" : "light");
    if (!checked) {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [checked]);

  return (
    <div
      className={`w-[48px] h-[24px] bg-slate-400 rounded-full flex items-center px-1 ${
        checked ? "" : "toggleDark"
      } cursor-pointer ${isHovered ? "toggleDark" : ""}`}
      onClick={handleChange}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={`w-[18px] h-[18px] rounded-full transition-transform duration-500 transform ${
          checked ? "translate-x-5  bg-white" : "translate-x-0 bg-black"
        }`}
      ></span>
    </div>
  );
}
