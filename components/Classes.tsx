"use client";

import Image from "next/image"; // Corrected import
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/veritatis"; // Corrected import

const classes = [
  {
    name: "Body building ",
    img: "/assets/images/classes/cardio.jpg", // Corrected path
    description:
      "lorem ipiusm dolor sit amet construcker sayin aohasu memeare miner mincrafr Mario",
  },
  {
    name: "Fitness ",
    img: "/assets/images/classes/fitness.jpg", // Corrected path
    description:
      "lorem ipiusm dolor sit amet construcker sayin aohasu memeare miner mincrafr Mario",
  },
  {
    name: "Crossfit ",
    img: "/assets/images/classes/crossfit.jpg", // Corrected path
    description:
      "lorem ipiusm dolor sit amet construcker sayin aohasu memeare miner mincrafr Mario",
  },
  {
    name: "Cardio ",
    img: "/assets/images/classes/cardio.jpg", // Corrected path
    description:
      "lorem ipiusm dolor sit amet construcker sayin aohasu memeare miner mincrafr Mario",
  },
];

const Classes = () => {
  return (
    <section id="class">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {classes.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-[300px] lg:h-[486px] flex flex-col justify-center items-center"
          >
            <div className="bg-black/50 absolute w-fuull h-full top-0 z-10 "></div>
            <Image
              src={item.img}
              layout="fill"
              objectFit="cover"
              alt="missing"
            />
            <div className="z-30 max-w-[390] text-center flex flex-col item-center justify-center gap-4">
              <h3 className="h2 text-accent text-vo">{item.name}</h3>
              <p className="text-white "> {item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Classes;
