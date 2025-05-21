"use client";
import { motion } from "framer-motion";

export default function Skill() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "MongoDB",
            "Tailwind CSS",
            "PostgreSQL",
          ].map((skill, i) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 p-4 rounded-xl text-center text-black/80"
              key={i}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
