"use client";

import { useClipboard } from "@mantine/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdOutlineContentCopy } from "react-icons/md";

const list = [
  {
    title: "BUY $SIDE",
    description:
      "Click the button below to buy $Side (ERC-20 token) directly on Uniswap.",
    link: {
      href: "https://app.uniswap.org/explore/tokens/ethereum/0x5a3153ae94e9fe2ecfdbd7ba7284c51560cb7aee",
      title: "BUY $SIDE",
      mode: "active",
    },
  },
  {
    title: "STAKE $SIDE",
    description: "Stake $Side and Earn Benefit in the Side.xyz ecosystem.",
    link: {
      href: "https://app.uniswap.org/explore/tokens/ethereum/0x5a3153ae94e9fe2ecfdbd7ba7284c51560cb7aee",
      title: "COMING SOON",
      mode: "disabled",
    },
  },
  {
    title: "$SIDE DAO",
    description: "Sometimes democracy works.. So, we might ask you to vote.",
    link: {
      href: "https://snapshot.org/#/sidewallet.eth",
      title: "VOTE",
      mode: "active",
    },
  },
];

export default function SideToken() {
  const clipboard = useClipboard({ timeout: 500 });

  function onCopy() {
    clipboard.copy("0x5A3153ae94E9FE2ECfdb7aEe");
  }

  return (
    <div className="relative bg-secondary-main pt-24 lg:pt-36">
      <div className="flex flex-col gap-4 px-6 lg:gap-6 lg:px-24">
        <h3 className="font-inter mx-auto w-fit border-b text-center text-[40px] font-bold leading-none text-white-main lg:text-[80px]">
          $SIDE TOKEN & UTILITIES
        </h3>
        <p className="mx-auto max-w-lg text-center text-sm font-light text-white-main lg:text-xl">
          The $Side token serves as both the utility and governance token for
          our MarketingFi platform. By using our solution, founders and
          community members (aka "degens") can earn $Side tokens as a reward.
          Additionally, our $Side token staking solution enables holders to
          access exclusive benefits within our apps. Stake your $Side tokens
          today and start enjoying the perks of being a part of our platform.
        </p>
        <div className="mt-11 flex items-center justify-center gap-5 lg:mt-3 lg:gap-8">
          <p className="text-sm font-light text-white-main lg:text-base">
            0x5A3153ae94E9FE2ECfdb7aEe
          </p>
          <div
            className="tooltip tooltip-bottom"
            data-tip={clipboard.copied ? "copied" : "copy"}
          >
            <motion.button
              type="button"
              title="Copy"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCopy}
              className="flex h-8 w-8 items-center justify-center rounded border border-primary-main bg-white-main text-primary-main lg:h-10 lg:w-10"
            >
              <MdOutlineContentCopy size="20" />
            </motion.button>
          </div>
        </div>
      </div>
      <div className="my-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-11 px-6 lg:my-24 lg:px-24">
        {list.map((item) => (
          <div
            key={item.title}
            className="flex h-full w-full max-w-sm flex-col items-center justify-between gap-6 rounded-2xl bg-white-main px-6 py-10 lg:min-h-[324px] lg:max-w-[417px] lg:px-10 lg:py-12"
          >
            <span className="font-inter text-2xl leading-none text-primary-main lg:text-[32px]">
              {item.title}
            </span>
            <p className="text-center text-base font-light leading-tight text-primary-main lg:text-xl">
              {item.description}
            </p>
            <motion.a
              href={item.link.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`font-inter rounded-lg bg-red-main px-8 py-5 font-bold text-white-main ${
                item.link.mode === "disabled" && "cursor-not-allowed opacity-20"
              }`}
            >
              {item.link.title}
            </motion.a>
          </div>
        ))}
      </div>
      <Image
        className="object-cover"
        width={2566}
        height={565}
        alt="Side Token"
        src="/assets/image/side-token.webp"
      />
    </div>
  );
}
