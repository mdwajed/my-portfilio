"use client";

import { motion } from "framer-motion";

export default function Banner() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative overflow-hidden bg-gradient-to-tr from-indigo-800 via-purple-700 to-pink-600 text-white rounded-3xl shadow-lg px-6 py-16 sm:py-20 sm:px-12 lg:px-24"
      >
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-indigo-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative z-10 text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-md text-center">
            Hi, I’m{" "}
            <span className="bg-white text-indigo-700 px-3 py-1 rounded-full shadow-inner inline-block">
              Abdul Wajed
            </span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-white/90 ">
            A Passionate Full Stack Web Developer.
          </p>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-white/70">
            I specialize in building responsive web applications using modern
            technologies like Next.js, TypeScript, Tailwind CSS, and MongoDB,
            PostgreSQL .
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-block mt-6 px-6 py-3 hover:bg-indigo-700 hover:text-white bg-white text-indigo-700 font-semibold rounded-full shadow  transition"
          >
            Download Resume
          </a>
        </div>
      </motion.section>
    </>
  );
}
