"use client";
import * as Switch from "@radix-ui/react-switch";
import { motion } from "framer-motion";
import { useState } from "react";
import StuffCard from "./StuffCard/StuffCard";
import Bag from "/public/assets/svg/bag.svg";
import Arrow from "/public/assets/svg/blue-arrow.svg";
import Chain from "/public/assets/svg/chain.svg";
import CoolStuff from "/public/assets/svg/cool-stuff-circle.svg";
import Diamond from "/public/assets/svg/diamond-v2.svg";
import Flame from "/public/assets/svg/flame.svg";
import Gear from "/public/assets/svg/gear.svg";
import Star from "/public/assets/svg/star.svg";

const founderItems = [
  {
    title: "RISE CAMPAIGNS",
    description:
      "Forget about fake loyalty and connections. Tribe helps you build the real deal on-chain. Design and reward the behavior you want to see from your community. Think diamond hands, big traders, buying streaks, and more. Set up a campaign and hook up your most loyal and active holders.",
    button: {
      href: "https://app.side.xyz/login",
      title: "LET’S DO THIS",
    },
    svg: <Diamond />,
    id: 1,
    status: "available",
  },
  {
    title: "ONCHAIN TRIBE",
    description:
      "Wanna blow up your community? Use incentives you have total control over. Here's how it works: you credit a reward pool, then users join your campaign and spread the word about your project on Twitter. The more noise they make, the more points they score. And guess what? Those points turn into airdrops!",
    button: {
      href: "#",
      title: "COMING SOON",
    },
    svg: <Star />,
    id: 2,
    status: "coming",
  },
  {
    title: "STAKING POOL",
    description:
      "Holders wanna put your coin to work, and our Staking Pool solution lets them do just that. Create a staking contract with all sorts of different settings and let 'em start earning.",
    button: {
      href: "#",
      title: "COMING SOON",
    },
    svg: <Flame />,
    id: 3,
    status: "coming",
  },
];

const degenItems = [
  {
    title: "RISE CAMPAIGNS",
    description:
      "Wanna earn some free crypto just for tweeting? Join campaigns, spread the word about cool projects, and rack up points. Then, watch as those points turn into airdrops. It's like getting paid to tweet, thanks to Side.xyz. Give it a try, you might dig it.",
    button: {
      href: "https://app.side.xyz/login",
      title: "LET’S DO THIS",
    },
    svg: <Gear />,
    id: 1,
    status: "available",
  },
  {
    title: "ONCHAIN TRIBE",
    description: `Get rewarded for being a loyal holder. Your fave projects can use Side's "Onchain Tribe" solution to hook you up for stuff like diamond hands and buying streaks. It's all automatic, so you just sit back and watch the rewards roll in.`,
    button: {
      href: "#",
      title: "COMING SOON",
    },
    svg: <Chain />,
    id: 2,
    status: "coming",
  },
  {
    title: "STAKING POOL",
    description: `Got some shitcoins, memecoins, or "utility tokens" just sitting around? Put 'em to work and earn some APY with our Staking Pool. It's an easy way to make your crypto do more for you.`,
    button: {
      href: "#",
      title: "COMING SOON",
    },
    svg: <Bag />,
    id: 3,
    status: "coming",
  },
];

export default function Stuff() {
  const [activeView, setActiveView] = useState<"DEGENS" | "FOUNDERS">(
    "FOUNDERS",
  );

  function handleActiveView(active: boolean) {
    setActiveView(!active ? "FOUNDERS" : "DEGENS");
  }

  return (
    <div className="overflow-hidden bg-primary-main py-24 lg:py-48">
      <div className="relative mx-auto mb-20 flex w-fit flex-col gap-4 px-6 lg:mb-36 lg:gap-6 lg:px-24">
        <h3 className="mx-auto w-fit border-b text-center font-inter text-[40px] font-bold uppercase leading-none text-white-main lg:text-[80px]">
          our web 3 stuff
        </h3>
        <p className="mx-auto max-w-[700px] text-center text-sm font-light text-white-main lg:text-xl">
          We Build Stuff to Help Projects Grow Like Crazy and Enable Communities
          ( aka &apos;Degens&apos;) to Receive Daily Points and Airdrops.
        </p>
        <div className="absolute -bottom-24 -left-28 hidden min-[1100px]:block">
          <div className="relative">
            <CoolStuff />
            <div className="absolute -right-20 top-1/2">
              <Arrow />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex items-center justify-center gap-4 px-6 lg:px-24">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`rounded-lg px-6 py-4 font-inter font-bold leading-none text-white-main ${activeView === "FOUNDERS" ? "bg-red-main" : "bg-shade-800"}`}
        >
          FOUNDERS
        </motion.button>
        <Switch.Root
          onCheckedChange={handleActiveView}
          className="relative h-[43px] w-[112px] cursor-pointer rounded-full border-none bg-shade-800 outline-none lg:h-[62px] lg:w-[138px]"
        >
          <Switch.Thumb className="block h-8 w-8 translate-x-1.5 rounded-full bg-red-main transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[74px] lg:h-11 lg:w-11 data-[state=checked]:lg:translate-x-[84px]" />
        </Switch.Root>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`rounded-lg px-6 py-4 font-inter font-bold leading-none text-white-main ${activeView === "DEGENS" ? "bg-red-main" : "bg-shade-800"}`}
        >
          DENGENS
        </motion.button>
      </div>
      <div className="mx-auto my-12 mb-20 flex w-full max-w-[1100px] flex-col gap-[88px] px-6 lg:my-[120px] lg:gap-[200px] lg:px-24">
        {activeView === "FOUNDERS"
          ? founderItems.map((item) => <StuffCard key={item.id} item={item} />)
          : degenItems.map((item) => <StuffCard key={item.id} item={item} />)}
      </div>
    </div>
  );
}
