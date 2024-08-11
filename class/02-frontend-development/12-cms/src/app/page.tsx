import Link from "next/link";

import { MdOutlineDesignServices } from "react-icons/md";
import { PiPencilCircleBold } from "react-icons/pi";
import { BsPersonVcard } from "react-icons/bs";
import { MdOutlinePhoneInTalk } from "react-icons/md";

export default function HomePage() {
  return (
    <section className="grid min-h-60 gap-2 lg:grid-cols-2">
      <Link
        href={"/collections"}
        className="teks-color inner-hero-menu rounded-[42px] bg-blue-500 text-white"
      >
        <div className="flex w-full items-center justify-between">
          <h2>See Our Collections</h2>
          <MdOutlineDesignServices size={32} />
        </div>
      </Link>
      <div className="grid gap-2">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div className="inner-hero-menu rounded-[42px] bg-gray-800 text-white dark:bg-white dark:text-black">
            <div className="flex w-full items-center justify-between">
              <h2>Work</h2>
              <PiPencilCircleBold size={32} />
            </div>
          </div>
          <div className="inner-hero-menu rounded-[42px] bg-red-500 text-white">
            <div className="flex w-full items-center justify-between">
              <h2>About Us</h2>
              <BsPersonVcard size={32} />
            </div>
          </div>
        </div>
        <div className="inner-hero-menu rounded-[42px] bg-yellow-200">
          <div className="flex w-full items-center justify-between">
            <h2>Contact Us</h2>
            <MdOutlinePhoneInTalk size={32} />
          </div>
        </div>
      </div>
    </section>
  );
}
