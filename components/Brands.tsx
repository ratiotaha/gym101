"use client";

import Image from "next/image";

const brandImages = [
  {
    src: "/assets/images/brands/brand-1.png",
  },
  {
    src: "/assets/images/brands/brand-2.png",
  },
  {
    src: "/assets/images/brands/brand-3.png",
  },
  {
    src: "/assets/images/brands/brand-4.png",
  },
  {
    src: "/assets/images/brands/brand-5.png", // Fix the typo here
  },
];

const Brands = () => {
  return (
    <section className="flex items-center py-8 space-x-4 container">
      <div className="flex">
        {brandImages.map((images, index) => (
          <div key={index}>
            <Image
              src={images.src}
              width={244}
              height={200}
              alt="error loading images"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
