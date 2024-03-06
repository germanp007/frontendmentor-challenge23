//import CustomizedSwitches from "./components/CustomizedSwitches";
import ControlSwitch from "./components/ControlSwitch";
import "./index.css";
const App = () => {
  return (
    <main className="w-screen h-screen">
      <header className="text-left h-[245px] w-full bg-VeryPaleBlue font-semibold px-5  pt-9">
        <h1 className=" text-VeryDarkBlue text-[1.4rem] tracking-[.04rem]">
          Social Media Dashboard
        </h1>
        <p className="text-[.85rem] text-DarkGrayishBlue mb-5">
          Total Followers: 23,004
        </p>
        <hr className="border-1 border-DarkGrayishBlue mb-5" />
        <div className="flex justify-between items-center">
          <p className="text-[.85rem] text-DesaturatedBlue">Dark Mode</p>
          <ControlSwitch />
        </div>
      </header>
    </main>
  );
};

export default App;
