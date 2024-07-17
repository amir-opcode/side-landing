import { motion } from "framer-motion";
import Image from "next/image";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";

export default function Hero() {
  return (
    <div className="relative z-0 flex h-full min-h-[850px] w-full overflow-hidden bg-secondary-main bg-[url('/assets/image/lines.webp')] bg-cover bg-center px-6 py-11 lg:min-h-[950px] lg:px-24">
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="https://app.side.xyz/"
        className="absolute bottom-6 left-0 right-0 z-50 mx-auto flex w-[90%] max-w-xs items-center justify-center gap-5 rounded-xl border-2 border-primary-main bg-red-main py-4 text-xl text-white-main lg:bottom-auto lg:left-auto lg:right-[100px] lg:top-11 lg:max-w-[200px] lg:p-5"
        target="_blank"
        referrerPolicy="no-referrer"
      >
        launch Dapp
        <Image
          className="hidden rounded-full lg:block"
          alt="website icon"
          src="/assets/image/webclip.png"
          width={16}
          height={16}
        />
      </motion.a>
      <MouseParallaxContainer className="mx-auto flex min-h-full w-full max-w-[1100px] flex-1 flex-col items-center lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col items-center justify-center gap-6 lg:items-start lg:justify-start">
          <div className="w-fit rounded-lg bg-primary-main px-6 py-3">
            <span className="text-xl font-light text-white-main lg:text-[22px]">
              Are you a<b className="font-inter"> FOUNDER </b> ?
            </span>
          </div>
          <h2 className="max-w-[340px] text-center font-inter text-2xl font-bold leading-none text-primary-main lg:max-w-[420px] lg:text-start lg:text-[40px]">
            We build solutions to skyrocket your project
          </h2>
        </div>
        <div className="relative my-auto flex items-center justify-center">
          <div className="animate-rotate relative h-[200px] w-[200px] lg:h-[300px] lg:w-[300px]">
            <Image
              width={40}
              height={40}
              src="/assets/image/icon_Fist_h75.webp"
              loading="lazy"
              alt="Fist Icon of side.xyz"
              className="absolute right-0 top-0 h-7 w-7 rounded-full lg:-top-1 lg:right-1 lg:h-10 lg:w-10"
            />
            <Image
              width={40}
              height={40}
              src="/assets/image/icon_Diamond_h75.webp"
              loading="lazy"
              alt="Image Icon of side.xyz"
              className="absolute -right-5 top-8 h-7 w-7 rounded-full lg:top-12 lg:h-10 lg:w-10"
            />
            <Image
              width={40}
              height={40}
              src="/assets/image/icon_Broken-heart_h75.webp"
              loading="lazy"
              alt="Broken Heart Icon of side.xyz"
              className="absolute -right-8 top-[70px] h-7 w-7 rounded-full lg:-right-11 lg:top-24 lg:h-10 lg:w-10"
            />
            <Image
              width={40}
              height={40}
              src="/assets/image/icon_Cursor_h75.webp"
              loading="lazy"
              alt="Cursor Icon of side.xyz"
              className="absolute -right-8 top-[104px] h-7 w-7 rounded-full lg:-right-12 lg:top-36 lg:h-10 lg:w-10"
            />
            <Image
              width={40}
              height={40}
              src="/assets/image/icon_Flower-Yellow_h75.webp"
              loading="lazy"
              alt="Image Icon of side.xyz"
              className="absolute -right-5 bottom-8 h-7 w-7 rounded-full lg:-right-8 lg:bottom-16 lg:h-10 lg:w-10"
            />
            <Image
              width={40}
              height={40}
              src="/assets/image/icon_Candle_h75.webp"
              loading="lazy"
              alt="Candle Icon of side.xyz"
              className="absolute -right-1 bottom-1 h-7 w-7 rounded-full lg:-right-3 lg:bottom-6 lg:h-10 lg:w-10"
            />
            <Image
              width={40}
              height={40}
              src="/assets/image/icon_Flame_h75.webp"
              loading="lazy"
              alt="Image Icon of side.xyz"
              className="absolute -bottom-4 right-6 h-7 w-7 rounded-full lg:-bottom-2 lg:right-5 lg:h-10 lg:w-10"
            />
            <Image
              width={40}
              height={40}
              src="/assets/image/icon_Flash_h75.webp"
              loading="lazy"
              alt="Flash  Icon of side.xyz"
              className="absolute -bottom-8 right-16 h-7 w-7 rounded-full lg:-bottom-11 lg:right-[70px] lg:h-10 lg:w-10"
            />
            <Image
              width={40}
              height={40}
              src="/assets/image/icon_Red-Mouth_h75.webp"
              loading="lazy"
              alt="Red Mouth Icon of side.xyz"
              className="absolute -bottom-9 left-[70px] h-7 w-7 rounded-full lg:-bottom-12 lg:left-[130px] lg:h-10 lg:w-10"
            />
            <Image
              width={40}
              height={40}
              src="/assets/image/icon_Star_h75.webp"
              loading="lazy"
              alt="Star Icon of side.xyz"
              className="absolute -bottom-6 left-[35px] h-7 w-7 rounded-full lg:-bottom-11 lg:left-[75px] lg:h-10 lg:w-10"
            />
            <Image
              width={40}
              height={40}
              src="/assets/image/icon_Knife_h75.webp"
              loading="lazy"
              alt="Image Icon of side.xyz"
              className="absolute -bottom-2 left-1.5 h-7 w-7 rounded-full lg:-bottom-5 lg:left-[25px] lg:h-10 lg:w-10"
            />
            <Image
              width={40}
              height={40}
              src="/assets/image/icon_Heart_h75.webp"
              loading="lazy"
              alt="Heart Icon of side.xyz"
              className="absolute -left-4 bottom-5 h-7 w-7 rounded-full lg:-left-3 lg:bottom-4 lg:h-10 lg:w-10"
            />
            <Image
              width={40}
              height={40}
              src="/assets/image/icon_Tablet-Blue_h75.webp"
              loading="lazy"
              alt="Tablet Blue Icon of side.xyz"
              className="absolute -left-7 bottom-14 h-7 w-7 rounded-full lg:-left-9 lg:bottom-[72px] lg:h-10 lg:w-10"
            />
            <Image
              width={40}
              height={40}
              src="/assets/image/icon_Bell_h75.webp"
              loading="lazy"
              alt="Bell Icon of side.xyz"
              className="absolute -left-8 bottom-24 h-7 w-7 rounded-full lg:-left-11 lg:bottom-[130px] lg:h-10 lg:w-10"
            />
            <Image
              width={40}
              height={40}
              src="/assets/image/icon_Skull_h75.webp"
              loading="lazy"
              alt="Skull Icon of side.xyz"
              className="absolute -left-6 top-8 h-7 w-7 rounded-full lg:-left-9 lg:top-[70px] lg:h-10 lg:w-10"
            />
            <Image
              width={40}
              height={40}
              src="/assets/image/icon_Spider_h75.webp"
              loading="lazy"
              alt="Spider Icon of side.xyz"
              className="absolute -left-1 top-1 h-7 w-7 rounded-full lg:-left-4 lg:top-6 lg:h-10 lg:w-10"
            />
            <Image
              width={40}
              height={40}
              src="/assets/image/icon_Red-pill_h75.webp"
              loading="lazy"
              alt="Red Pill Icon of side.xyz"
              className="absolute -top-5 left-7 h-7 w-7 rounded-full lg:-top-3 lg:left-6 lg:h-10 lg:w-10"
            />
            <Image
              width={40}
              height={40}
              src="/assets/image/icon_Hand-Ok_h75.webp"
              loading="lazy"
              alt="Hand Icon of side.xyz"
              className="absolute -top-8 left-16 h-7 w-7 rounded-full lg:-top-11 lg:left-[70px] lg:h-10 lg:w-10"
            />
            <Image
              width={40}
              height={40}
              src="/assets/image/icon_Thooth_h75.webp"
              loading="lazy"
              alt="Tooth Icon of side.xyz"
              className="absolute -top-9 left-[105px] h-7 w-7 rounded-full lg:-top-12 lg:left-32 lg:h-10 lg:w-10"
            />
            <Image
              width={40}
              height={40}
              src="/assets/image/icon_Blue-pill_h75.webp"
              loading="lazy"
              alt="Blue Pill Icon of side.xyz"
              className="absolute -top-6 right-7 h-7 w-7 rounded-full lg:-top-10 lg:right-[64px] lg:h-10 lg:w-10"
            />
          </div>
          <MouseParallaxChild
            className="absolute inset-0"
            factorX={0.2}
            factorY={0.2}
          >
            <Image
              className="max-w-[200px] rounded-full lg:max-w-[300px]"
              alt="website icon"
              src="/assets/image/logo.webp"
              width={300}
              height={300}
            />
          </MouseParallaxChild>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 lg:mt-auto lg:items-end lg:justify-start">
          <div className="w-fit rounded-lg bg-primary-main px-6 py-3">
            <span className="text-xl font-light text-white-main lg:text-[22px]">
              Are you a<b className="font-inter"> DEGEN </b> ?
            </span>
          </div>
          <h2 className="max-w-[340px] text-center font-inter text-2xl font-bold leading-none text-primary-main lg:max-w-[420px] lg:text-end lg:text-[40px]">
            Receive points and airdrops every single day
          </h2>
          d
        </div>
      </MouseParallaxContainer>
    </div>
  );
}
