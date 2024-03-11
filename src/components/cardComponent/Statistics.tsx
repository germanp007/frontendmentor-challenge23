import { FC } from "react";
import {
  Facebook,
  IconDown,
  IconUp,
  Instagram,
  Twitter,
  Youtube,
} from "../iconComponents.tsx";

type Props = {
  id: string;
  likes: number;
  percentLikes: number;
  interaction: number;
  percentInteraction: number;
  description: string;
};
const Statistics: FC<Props> = ({
  id,
  likes,
  interaction,
  percentLikes,
  percentInteraction,
  description,
}) => {
  const isInstagramOrYoutube = id === "instagram" || id === "youtube";
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <article
        className={`w-full h-[125px] md:w-[255px] bg-LightGrayishBlue px-8 py-5 flex flex-col justify-between rounded-[0.3rem] ${
          isInstagramOrYoutube ? "order-2" : "order-1"
        }`}
      >
        <div className="flex justify-between">
          <h2 className="text-xs font-bold text-DarkGrayishBlue">
            {description}
          </h2>
          {id === "facebook" ? (
            <Facebook />
          ) : id === "instagram" ? (
            <Instagram />
          ) : id === "twitter" ? (
            <Twitter />
          ) : (
            <Youtube />
          )}
        </div>
        <div className="flex justify-between h-[39px]">
          <h2 className="text-[2rem] text-VeryDarkBlue font-bold">
            {interaction > 9999 ? `${interaction / 1000}k` : interaction}
          </h2>
          <div className="flex justify-center items-end">
            <div className="flex justify-center items-center">
              {percentInteraction > 0 ? <IconUp /> : <IconDown />}
              <span
                className={`text-xs font-medium ${
                  percentInteraction > 0 ? "text-LimeGreen" : "text-BrightRed"
                }
    ml-[5.6px] tracking-[0.045rem]`}
              >
                {Math.abs(percentInteraction)}%
              </span>
            </div>
          </div>
        </div>
      </article>
      <article
        className={`w-full h-[125px] md:w-[255px] bg-LightGrayishBlue px-8 py-5 flex flex-col justify-between rounded-[0.3rem] ${
          isInstagramOrYoutube ? "order-1" : "order-2"
        }`}
      >
        <div className="flex justify-between">
          <h2 className="text-xs font-bold text-DarkGrayishBlue">Likes</h2>
          {id === "facebook" ? (
            <Facebook />
          ) : id === "instagram" ? (
            <Instagram />
          ) : id === "twitter" ? (
            <Twitter />
          ) : (
            <Youtube />
          )}
        </div>
        <div className="flex justify-between h-[39px]">
          <h2 className="text-[2rem] text-VeryDarkBlue font-bold">{likes}</h2>
          <div className="flex justify-center items-end">
            <div className="flex justify-center items-center">
              {percentLikes > 0 ? <IconUp /> : <IconDown />}
              <span
                className={`text-xs font-medium ${
                  percentLikes > 0 ? "text-LimeGreen" : "text-BrightRed"
                }
    ml-[5.6px] tracking-[0.045rem]`}
              >
                {Math.abs(percentLikes)}%
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Statistics;
