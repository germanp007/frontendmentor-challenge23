//import CustomizedSwitches from "./components/CustomizedSwitches";
import ControlSwitch from "./components/ControlSwitch";
import "./index.css";
const App = () => {
  return (
    <main className="w-screen min-h-screen">
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
      <section className="px-5">
        <div className="bg-LightGrayishBlue w-full h-[212px] border-t-4 border-Facebook rounded-[0.3rem] mt-[-20px]"></div>
      </section>
    </main>
  );
};

export default App;
