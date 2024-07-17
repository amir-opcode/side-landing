"use client";

import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  {
    title: "Insai",
    name: "$INSAI",
    innerImageSrc: "/assets/image/1-Insai.webp",
    imageSec: "/assets/image/icon_Hand-Thumb-Up_h75.webp",
  },
  {
    title: "Focus Tree",
    name: "$FOCUS",
    innerImageSrc: "/assets/image/2-Focus-Tree.webp",
    imageSec: "/assets/image/icon_Tablet-Blue_h75.webp",
  },
  {
    title: "Toshi",
    name: "$TOSHI",
    innerImageSrc: "/assets/image/3-Toshi.webp",
    imageSec: "/assets/image/icon_Flash_h75.webp",
  },
  {
    title: "Revomon",
    name: "$REVO",
    innerImageSrc: "/assets/image/4-Revomon.webp",
    imageSec: "/assets/image/icon_Flame_h75.webp",
  },
  {
    title: "Krav",
    name: "$KRAV",
    innerImageSrc: "/assets/image/5-Krav.webp",
    imageSec: "/assets/image/icon_Skull_h75.webp",
  },
  {
    title: "Brett",
    name: "$BRETT",
    innerImageSrc: "/assets/image/6-Brett.webp",
    imageSec: "/assets/image/icon_Fist_h75.webp",
  },
  {
    title: "Roost",
    name: "$ROOST",
    innerImageSrc: "/assets/image/7-Roost.webp",
    imageSec: "/assets/image/icon_Blue-pill_h75.webp",
  },
  {
    title: "Degen",
    name: "$DEGEN",
    innerImageSrc: "/assets/image/8-Degen.webp",
    imageSec: "/assets/image/icon_Heart_h75.webp",
  },
];

export default function CaseStudies() {
  return (
    <div className="bg-white-main py-24 pb-40 lg:py-36 lg:pb-60">
      <div className="mb-24 flex flex-col gap-4 px-6 lg:gap-6 lg:px-24">
        <h3 className="mx-auto w-fit border-b border-b-primary-main text-center font-inter text-[40px] font-bold leading-none text-primary-main lg:text-[80px]">
          CASE STUDIES
        </h3>
        <p className="mx-auto max-w-[700px] text-center text-sm font-light text-primary-main lg:text-xl">
          The founders and community members of the following tokens have
          utilized Side as a MarketingFi solution to expand their projects and
          incentivize their communities. By leveraging our platform, these
          projects have been able to drive growth and reward some of their most
          active and engaged members.
        </p>
      </div>
      <div className="mx-auto max-w-screen-2xl mb-14">
        <AliceCarousel
          mouseTracking
          infinite
          autoPlay
          animationDuration={2500}
          disableDotsControls
          items={items.map((item) => (
            <div
              className="flex items-center w-full justify-center gap-3 lg:gap-5"
              key={item.name}
            >
              <div className="flex !min-w-fit w-fit max-w-[302px] items-center justify-between gap-2 rounded-full bg-blue-main/20 px-5 py-3 lg:gap-4 lg:px-7 lg:py-6">
                <Image
                  alt={item.title}
                  src={item.innerImageSrc}
                  width={40}
                  height={40}
                  className="h-7 w-7 rounded-full lg:h-10 lg:w-10"
                />
                <span className="font-light text-nowrap text-primary-main lg:text-xl">
                  {item.title}
                </span>
                <span className="rounded-[10px] bg-blue-main px-3 py-2 text-sm font-bold text-white-main lg:px-4 lg:text-base">
                  {item.name}
                </span>
              </div>
              <Image
                alt={item.title}
                src={item.imageSec}
                width={48}
                height={48}
                className="h-8 w-8 lg:h-12 lg:w-12"
              />
            </div>
          ))}
          disableButtonsControls
          // responsive={{
          //   0: {
          //     items: 1,
          //   },
          //   360: {
          //     items: 2,
          //   },
          //   600: {
          //     items: 3,
          //   },
          //   1020:{
          //     items:4
          //   },
            
          // }}
          autoWidth
          
        />
      </div>
      <div className="mx-auto max-w-screen-2xl">
        <AliceCarousel
          mouseTracking
          infinite
          autoPlay
          animationDuration={1500}
          disableDotsControls
          items={items.reverse().map((item) => (
            <div
              className="flex items-center w-full justify-center gap-3 lg:gap-5"
              key={item.name}
            >
              <div className="flex !min-w-fit w-fit max-w-[302px] items-center justify-between gap-2 rounded-full bg-blue-main/20 px-5 py-3 lg:gap-4 lg:px-7 lg:py-6">
                <Image
                  alt={item.title}
                  src={item.innerImageSrc}
                  width={40}
                  height={40}
                  className="h-7 w-7 rounded-full lg:h-10 lg:w-10"
                />
                <span className="font-light text-nowrap text-primary-main lg:text-xl">
                  {item.title}
                </span>
                <span className="rounded-[10px] bg-blue-main px-3 py-2 text-sm font-bold text-white-main lg:px-4 lg:text-base">
                  {item.name}
                </span>
              </div>
              <Image
                alt={item.title}
                src={item.imageSec}
                width={48}
                height={48}
                className="h-8 w-8 lg:h-12 lg:w-12"
              />
            </div>
          ))}
          disableButtonsControls
          // responsive={{
          //   0: {
          //     items: 1,
          //   },
          //   360: {
          //     items: 2,
          //   },
          //   600: {
          //     items: 3,
          //   },
          //   1020:{
          //     items:4
          //   },
            
          // }}
          autoWidth
          
        />
      </div>
    </div>
  );
}
