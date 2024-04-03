"use client";
import { Swiper, SwiperSlide } from "swiper/react";
const HeroSlider = () => {
  return (
    <Swiper>
      <SwiperSlide className="h-full flex justify-end pt-50 ">
        <div className=" flex flex-col justify-center items-center sm:justify-start sm:items-start">
          <h1 className="h1 text-center lg:text-left mb-2">
            <span>Where hard </span> work meets success
          </h1>
          <p className="text-white italic text-center lg-text-left -mb-4">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
            aspernatur maiores repellat nihil, minus necessitatibus minima?
            Pariatur quo, labore alias voluptates doloribus officia eos illum
            quas necessitatibus illo dolore aperiam.
          </p>
          <div className="pt-10">
            {" "}
            <button className="w-[196px] h-[62px] relative cursor-pointer overflow-hidden bg-accent uppercase justify-between">
              {" "}
              Get started
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
