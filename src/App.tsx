//import CustomizedSwitches from "./components/CustomizedSwitches";
import ControlSwitch from "./components/ControlSwitch";
import { Facebook, IconUp } from "./components/iconComponents.tsx";
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
        <article className="bg-LightGrayishBlue w-full h-[212px] border-t-4 border-Facebook rounded-[0.3rem] mt-[-20px] flex flex-col items-center justify-evenly  pb-3">
          <div className="flex items-center mt-3">
            <Facebook />
            <span className="ml-2 text-xs font-bold text-DarkGrayishBlue">
              @nathanf
            </span>
          </div>
          <div className="flex flex-col items-center justify-center mb-4">
            <h2 className="h-[70px] text-[3.45rem] font-bold text-VeryDarkBlue">
              1987
            </h2>
            <p className="text-xs font-extralight tracking-[.354rem] text-DarkGrayishBlue">
              FOLLOWERS
            </p>
          </div>
          <div className="flex items-center">
            <IconUp />
            <span className="text-xs font-medium text-LimeGreen ml-[5.6px]">
              12 Today
            </span>
          </div>
        </article>
      </section>
    </main>
  );
};

export default App;
