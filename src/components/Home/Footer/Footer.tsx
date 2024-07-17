"use client";

import { motion } from "framer-motion";
import { BsDiscord } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiCoinmarketcap } from "react-icons/si";
import Bonzai from "/public/assets/svg/bonzai.svg";
import Dextools from "/public/assets/svg/dextools.svg";
import EtherScan from "/public/assets/svg/ether-scan.svg";
import OpenSea from "/public/assets/svg/open-sea.svg";

const links = [
  {
    title: "About",
    links: [
      {
        title: "Buy $SIDE",
        href: "https://app.uniswap.org/explore/tokens/ethereum/0x5a3153ae94e9fe2ecfdbd7ba7284c51560cb7aee",
      },
      {
        title: "Etherscan",
        href: "https://etherscan.io/token/0x5a3153ae94e9fe2ecfdbd7ba7284c51560cb7aee",
      },
      {
        title: "Buy Side Cards",
        href: "https://opensea.io/collection/side-cards",
      },
      {
        title: "White Paper",
        href: "https://side.xyz/whitepaper.pdf",
      },
      {
        title: "Vesting Page",
        href: "https://token.side.xyz/",
      },
    ],
  },
  {
    title: "Ressources",
    links: [
      {
        title: "App",
        href: "https://app.side.xyz/login",
      },
      {
        title: "DAO",
        href: "https://snapshot.org/#/sidewallet.eth",
      },
      {
        title: "Newsletter",
        href: "https://www.bonzai.pro/side",
      },
      {
        title: "Roadmap",
        href: "https://www.bonzai.pro/side/posts/6yBY_8842/side-roadmap",
      },
      {
        title: "Bootcamp",
        href: "https://www.bonzai.pro/side/shop/O6mw_1742/bootcamp-v2",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        title: "Security",
        href: "https://side.xyz/about/security",
      },
      {
        title: "Risks",
        href: "https://side.xyz/legal/risk",
      },
      {
        title: "Privacy Policy",
        href: "https://side.xyz/legal/privacy-policy",
      },
      {
        title: "Cookie Policy",
        href: "https://side.xyz/legal/cookie-policy",
      },
      {
        title: "Terms of Use",
        href: "https://side.xyz/legal/terms-of-use",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col gap-16 bg-primary-main px-6 py-20 lg:gap-8 lg:px-16 lg:py-24">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center rounded-2xl bg-transparent lg:gap-8 lg:bg-shade-950 lg:py-10">
          <h6 className="hidden text-2xl font-bold uppercase text-white-main lg:block">
            join the community
          </h6>
          <div className="flex w-full flex-wrap items-center justify-center gap-6 lg:gap-10">
            <motion.a
              href="https://x.com/sidexyz"
              className="flex h-[70px] w-[70px] max-w-[214px] items-center justify-center rounded-lg bg-blue-main/20 p-5 text-white-main duration-300 hover:bg-red-main hover:shadow-2xl hover:shadow-white-main/40 lg:h-[82px] lg:w-full lg:gap-4 lg:px-8 lg:py-6"
              target="_blank"
              referrerPolicy="no-referrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="hidden flex-col text-white-main lg:flex">
                <span className="text-sm font-light leading-none">
                  FOLLOW OUR
                </span>

                <b className="text-xl font-bold">Twitter</b>
              </span>
              <FaXTwitter size="34" />
            </motion.a>
            <motion.a
              href="https://www.bonzai.pro/side"
              className="flex h-[70px] w-[70px] max-w-[214px] items-center justify-center rounded-lg bg-blue-main/20 p-5 text-white-main duration-300 hover:bg-red-main hover:shadow-2xl hover:shadow-white-main/40 lg:h-[82px] lg:w-full lg:gap-4 lg:px-8 lg:py-6"
              target="_blank"
              referrerPolicy="no-referrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="hidden flex-col text-white-main lg:flex">
                <span className="text-sm font-light leading-none">
                  READ US ON
                </span>
                <b className="text-xl font-bold">Bonzai</b>
              </span>
              <Bonzai />
            </motion.a>
            <motion.a
              href="https://discord.com/invite/tU267yZHEa"
              className="flex h-[70px] w-[70px] max-w-[214px] items-center justify-center rounded-lg bg-blue-main/20 p-5 text-white-main duration-300 hover:bg-red-main hover:shadow-2xl hover:shadow-white-main/40 lg:h-[82px] lg:w-full lg:gap-4 lg:px-8 lg:py-6"
              target="_blank"
              referrerPolicy="no-referrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="hidden flex-col text-white-main lg:flex">
                <span className="text-sm font-light leading-none">
                  HOP INTO
                </span>
                <b className="text-xl font-bold">Discord</b>
              </span>
              <BsDiscord size="33" />
            </motion.a>
            <motion.a
              href="https://t.me/sidexyz"
              className="flex h-[70px] w-[70px] max-w-[214px] items-center justify-center rounded-lg bg-blue-main/20 p-5 text-white-main duration-300 hover:bg-red-main hover:shadow-2xl hover:shadow-white-main/40 lg:h-[82px] lg:w-full lg:gap-4 lg:px-8 lg:py-6"
              target="_blank"
              referrerPolicy="no-referrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="hidden flex-col text-white-main lg:flex">
                <span className="text-sm font-light leading-none">
                  JOIN OUR
                </span>
                <b className="text-xl font-bold">Telegram</b>
              </span>
              <FaTelegramPlane size="33" />
            </motion.a>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-screen-2xl flex-row justify-between lg:flex-row-reverse lg:gap-8">
          <div className="flex flex-1 flex-col gap-9 rounded-2xl bg-transparent lg:flex-row lg:justify-between lg:bg-shade-950 lg:px-24 lg:py-14">
            {links.map((link) => (
              <div key={link.title} className="flex flex-col gap-2 lg:gap-4">
                <span className="text-lg font-bold text-white-main lg:text-xl">
                  {link.title}
                </span>
                <ul className="flex flex-col gap-1">
                  {link.links.map((iLink) => (
                    <li key={iLink.title}>
                      <a
                        href={iLink.href}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="text-sm font-light text-white-main transition-all hover:underline lg:text-base"
                      >
                        {iLink.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-1 flex-col gap-8 rounded-2xl bg-transparent lg:flex-[0.48] lg:bg-shade-950 lg:px-10 lg:py-14">
            <span className="hidden text-xl font-bold text-white-main lg:block">
              Check Also
            </span>
            <div className="flex w-full flex-col items-end gap-4 lg:flex-row lg:flex-wrap">
              <motion.a
                href="https://coinmarketcap.com/fr/currencies/side-xyz/"
                rel="noopener"
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center gap-2 rounded-full bg-blue-main/20 px-5 py-2 text-white-main duration-300 hover:bg-red-main hover:shadow-2xl hover:shadow-white-main/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiCoinmarketcap size="20" />
                <span>Coin Market Cap</span>
              </motion.a>
              <motion.a
                href="https://opensea.io/collection/side-cards"
                rel="noopener"
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center gap-2 rounded-full bg-blue-main/20 px-5 py-2 text-white-main duration-300 hover:bg-red-main hover:shadow-2xl hover:shadow-white-main/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <OpenSea />
                <span>Open Sea</span>
              </motion.a>
              <motion.a
                href="https://www.dextools.io/app/en/ether/pair-explorer/0x999321ecb9c9a95f21aa47ae3139c7c40ace3be9?t=1716657011455"
                target="_blank"
                rel="noopener"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center gap-2 rounded-full bg-blue-main/20 px-5 py-2 text-white-main duration-300 hover:bg-red-main hover:shadow-2xl hover:shadow-white-main/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Dextools />
                <span>Dextools</span>
              </motion.a>
              <motion.a
                href="https://etherscan.io/token/0x5a3153ae94e9fe2ecfdbd7ba7284c51560cb7aee"
                target="_blank"
                rel="noopener"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center gap-2 rounded-full bg-blue-main/20 px-5 py-2 text-white-main duration-300 hover:bg-red-main hover:shadow-2xl hover:shadow-white-main/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <EtherScan />
                <span>EtherScan</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-secondary-main px-8 py-10">
        <span className="text-center font-bold text-primary-main lg:text-xl">
          Copyright © 2024 SIDE.xyz. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
