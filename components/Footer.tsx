import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black pt-24">
      <div className="container mx-auto pb-24 text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12">
        <div className="bg-red-300 bg-opacity-20 flex flex-col gap-4">
          <Image
            src={"/assets/images/logo.png"}
            width={117}
            height={55}
            alt="Logo"
          />

          <p className="max-w-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus
          </p>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-xl text-accent" />
              <span>Location Default London</span>
            </li>
            <li className="flex items-center gap-4">
              <FaPhoneAlt />
              <span>049439 934939 94</span>
            </li>
          </ul>
        </div>

        <div className="bg-red-300 bg-opacity-20">
          <h4 className="h4 text-accent mb-4 font-bold"> Recent blog posts</h4>
          <div className="border-b border-dotted border-grey-400 pb-4">
            <h5 className="h5 leading-snug font-bold hover:text-accent transition-all">
              How to stay motivated for exercises
            </h5>
            <p className="text-grey-400 text-[12px] tracking-[3px] uppercase">
              September 22, 2024
            </p>
          </div>
          <div className="pb-4">
            <h5 className="h5 leading-snug font-bold hover:text-accent transition-all">
              How to Eat healthy each day
            </h5>
            <p className="text-grey-400 text-[12px] tracking-[3px] uppercase">
              September 22, 2024
            </p>
          </div>
        </div>

        <div className="bg-red-300 bg-opacity-20">
          <h4 className="h4 text-accent mb-4 font-bold">Gallery</h4>
          <div className="grid grid-cols-3 gap-4">
            <img
              src="/assets/images/gallery/image1.jpg"
              alt="Image 1"
              className="w-full h-auto"
            />
            <img
              src="/assets/images/gallery/image2.jpg"
              alt="Image 2"
              className="w-full h-auto"
            />
            <img
              src="/assets/images/gallery/image3.jpg"
              alt="Image 3"
              className="w-full h-auto"
            />
            {/* Add more images as needed */}
          </div>
        </div>
        <div className="bg-red-300 bg-opacity-20">
          <h4 className="h4 text-accent mb-4 font-bold">Newsletter</h4>
          <p className="mb-4">
            Stay updated with our latest news and tips on fitness and exercise.
            Subscribe to our newsletter to receive exclusive content directly to
            your inbox.
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-4 py-2 border border-gray-300"
            />
            <button
              type="submit"
              className="bg-accent text-white px-4 py-2 rounded hover:bg-accent-dark transition-colors"
            >
              Subscribe
            </button>
          </form>
          <div className="mt-4">
            <h5 className="text-accent font-bold">Latest Exercise News</h5>
            <ul className="list-disc pl-6"></ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
