"use client";

import { FaUser, FaUsers } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa6";
import { motion } from "framer-motion";

const featured = [
  {
    icon: <FaUser />,
    title: "Award-winning trainers",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    icon: <IoIosPricetag />,
    title: "Excellent prices",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    icon: <FaDumbbell />,
    title: "Modern equipments",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];

const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col item-center gap-2 mb-8">
          <h2 className="h2 text-center">About us</h2>
          <p className="max-w-[600px] mx-auto text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aliquid
            totam corrupti beatae non eos ipsa fugit voluptate ex! Alias eveniet
            dolorem quasi neque quo consequuntur itaque nemo voluptatibus
            veritatis?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16 mt-[100px]">
          {featured.map((feature, index) => (
            <div
              key={index}
              className="flex justify-center flex-col items-center gap-4 text-center border p-[50px]"
            >
              <div className="text-4xl bg-primary-300 text-white w-[45px] items-center p-1 rounded-[100px]">
                {feature.icon}
              </div>
              <div>
                <h3 className="h4 font-bold text-accent">{feature.title}</h3>
                <p>{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
