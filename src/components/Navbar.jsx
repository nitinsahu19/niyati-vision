import { IKImage } from "imagekitio-react";
import { useState } from "react";
import Image from "./Image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" h={32} w={32} alt="logo" />
        <span>niyati-vision</span>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        {/* Mobile Button */}
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "☰"}
        </div>

        {/* Mobile Links */}
        <div
          className={`w-full h-screen flex flex-col gap-8 font-medium text-lg items-center justify-center absolute top-16 ${
            open ? "-right-0" : "-right-[100%]"
          } transition-all ease-in-out`}
        >
          <a href="">Home</a>
          <a href="">Trending</a>
          <a href="">Most Popular</a>
          <a href="">About</a>
          <a href="">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login
            </button>
          </a>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="">Home</a>
        <a href="">Trending</a>
        <a href="">Most Popular</a>
        <a href="">About</a>
        <a href="">
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
            Login
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
