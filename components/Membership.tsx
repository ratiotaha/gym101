"use client";

import { motion } from "framer-motion";
import MembershipSlider from "./MembershipSlider";

const Membership = () => {
  return (
    <section
      className="py-8 xl:py-0 lg:h-[150vh] bg-membership bg-cover bg-center relative"
      id="prices"
    >
      <div className="container mx-auto px-0 text-white h-full flex flex-col xl:pt-24 relative">
        <h2 className="font-bold h2 text-white text-center mb-8">Membership</h2>

        <MembershipSlider />
      </div>
    </section>
  );
};

export default Membership;
