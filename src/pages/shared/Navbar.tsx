"use client";

import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="  fixed top-0 left-0 w-full z-50 ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          Abdul Wajed
        </Link>

        <div className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </div>

        <nav
          className={`md:flex gap-6 justify-center items-center text-gray-700 text-sm font-medium absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all ${
            open ? "block" : "hidden md:block"
          }`}
        >
          <Link
            href="/dashboard"
            className="block  px-6 py-3 md:px-0 md:py-0 hover:text-red-700 "
          >
            Dashboard
          </Link>
          <Link
            href="/projects"
            className="block  px-6 py-3 md:px-0 md:py-0 hover:text-red-700"
          >
            Projects
          </Link>
          <Link
            href="/blogs"
            className="block px-6 py-3 md:px-0 md:py-0 hover:text-red-700"
          >
            Blogs
          </Link>

          <Link
            href="/#contact"
            className="block px-6 py-3 md:px-0 md:py-0 hover:text-red-700"
          >
            Contact
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
