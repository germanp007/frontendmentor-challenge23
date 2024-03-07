import Card from "./components/cardComponent/Card.tsx";
import Statistics from "./components/cardComponent/Statistics.tsx";

import ControlSwitch from "./components/switch/ControlSwitch.tsx";
import { dataSocialMedia, statistics } from "./data/data.ts";
import "./index.css";
const App = () => {
  return (
    <main className="w-screen min-h-screen pb-14">
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
      <section className="px-5 grid gap-10 mb-14">
        {dataSocialMedia.map((ele) => (
          <Card
            key={ele.id}
            id={ele.id}
            account={ele.account}
            followers={ele.followers}
            today={ele.today}
          />
        ))}
      </section>
      <section className="px-5 gap-6 grid">
        <h2 className="text-[1.5rem] font-bold text text-DarkGrayishBlue mb-5">
          Overview - Today
        </h2>
        {statistics.map((ele) => (
          <Statistics
            id={ele.id}
            likes={ele.likes}
            percentLikes={ele.percentLikes}
            interaction={ele.interaction}
            percentInteraction={ele.percentInteraction}
            description={ele.description}
          />
        ))}
      </section>
    </main>
  );
};

export default App;
