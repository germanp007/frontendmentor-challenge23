import { FC } from "react";
import {
  Facebook,
  IconDown,
  IconUp,
  Instagram,
  Twitter,
  Youtube,
} from "../iconComponents.tsx";
import CountUp from "react-countup";

type Props = {
  id: string;
  account: string;
  followers: number;
  today: number;
};

const Card: FC<Props> = ({ id, account, followers, today }) => {
  return (
    <article
      className={`bg-LightGrayishBlue w-full  sm:mt-[-90px] sm:mb-[90px] lg:w-[255px] h-[212px] rounded-[0.3rem] mt-[-20px] flex flex-col items-center justify-evenly cursor-pointer pb-3 hover:bg-slate-200 transition-all duration-500 ${
        id === "instagram"
          ? "instagram border-t-4"
          : id === "facebook"
          ? "border-t-4 border-facebook"
          : id === "twitter"
          ? "border-twitter border-t-4"
          : "border-youTube border-t-4"
      } dark:bg-DarkDesaturatedBlue`}
    >
      <div className="flex items-center mt-3">
        {id === "facebook" ? (
          <Facebook />
        ) : id === "twitter" ? (
          <Twitter />
        ) : id === "instagram" ? (
          <Instagram />
        ) : (
          <Youtube />
        )}
        <span className="ml-2 text-xs font-bold text-DarkGrayishBlue">
          {account}
        </span>
      </div>
      <div className="flex flex-col items-center justify-center mb-4 ">
        <h2 className="h-[70px] text-[3.45rem] font-bold text-VeryDarkBlue dark:text-White">
          {followers > 9999 ? (
            <CountUp end={followers / 1000} suffix="k" />
          ) : (
            <CountUp end={followers} />
          )}
        </h2>
        <p className="text-xs font-extralight tracking-[.354rem] text-DarkGrayishBlue">
          {id === "youtube" ? "SUBSCRIBERS" : "FOLLOWERS"}
        </p>
      </div>
      <div className="flex items-center">
        {today > 0 ? <IconUp /> : <IconDown />}
        <span
          className={`text-xs font-medium ${
            today > 0 ? "text-LimeGreen" : "text-BrightRed"
          } ml-[5.6px] tracking-[0.045rem]`}
        >
          {Math.abs(today)} Today
        </span>
      </div>
    </article>
  );
};

export default Card;
