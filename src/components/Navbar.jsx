import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image
          src="https://ik.imagekit.io/c4qpxpvi8/logo.png"
          h={32}
          w={32}
          alt="logo"
        />
        <span>niyati-vision</span>
      </Link>

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
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          <Link to="/">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <Link to="/">
          <SignedOut>
            <Link to="/login">
              <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                Login
              </button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
