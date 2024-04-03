"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCheck } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const MembershipSlider = () => {
  const membershipData = [
    {
      title: "Standard",
      price: "30",
      benefits: [
        { icon: FaCheck, text: "Includes membership" },
        { icon: FaCheck, text: "Access to all gym facilities" },
        { icon: MdClose, text: "Diet plan included" },
        { icon: FaCheck, text: "Health and fitness tips" },
        { icon: MdClose, text: "Monday - Friday gym access" },
        { icon: FaCheck, text: "Full access to everything" },
        { icon: FaCheck, text: "No additional amenities" },
      ],
    },
    {
      title: "Ultimate",
      price: "45",
      benefits: [
        { icon: FaCheck, text: "Includes membership" },
        { icon: FaCheck, text: "Access to all gym facilities" },
        { icon: FaCheck, text: "Diet plan included" },
        { icon: FaCheck, text: "Health and fitness tips" },
        { icon: FaCheck, text: "Monday - Friday gym access" },
        { icon: FaCheck, text: "Full access to everything" },
        { icon: FaCheck, text: "No additional amenities" },
      ],
    },
    {
      title: "Professional",
      price: "80",
      benefits: [
        { icon: FaCheck, text: "Includes membership" },
        { icon: FaCheck, text: "Access to all gym facilities" },
        { icon: MdClose, text: "Diet plan included" },
        { icon: FaCheck, text: "Health and fitness tips" },
        { icon: MdClose, text: "Monday - Friday gym access" },
        { icon: FaCheck, text: "Full access to everything" },
        { icon: FaCheck, text: "No additional amenities" },
      ],
    },
  ];

  return (
    <Swiper
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: 2 }, // Display 2 slides per view on screens wider than 768px
        1024: { slidesPerView: 3 }, // Display 3 slides per view on screens wider than 1024px
      }}
      pagination={{ clickable: true }}
      className="min-h-[680px]"
    >
      {membershipData.map((membership, index) => (
        <SwiperSlide key={index}>
          <div className="border border-accent bg-black hover:bg-red-700 transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto p-4">
            <h2 className="text-xl font-bold">{membership.title}</h2>
            <p className="text-white-600">${membership.price}/month</p>
            <ul className="mt-4">
              {membership.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center mb-2">
                  <span className="mr-2">
                    {React.createElement(benefit.icon, {
                      className: "text-green-500",
                    })}
                  </span>
                  <span>{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MembershipSlider;
