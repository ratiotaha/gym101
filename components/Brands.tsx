"use client";

import Image from "next/image";

const brandImages = [
  {
    src: "/asset/images/brands/brand-1.png",
  },
  {
    src: "/asset/images/brands/brand-2.png",
  },
  {
    src: "/asset/images/brands/brand-3.png",
  },
  {
    src: "/asset/images/brands/brand-4.png",
  },
  {
    src: "/asset/images/brands/brand-5.png", // Fix the typo here
  },
];

const Brands = () => {
  return (
    <section className="py-8" id="contact">
      <div className="container mx-auto">
        <div>
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
      </div>
    </section>
  );
};

export default Brands;
