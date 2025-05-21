"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Preview three sample projects */}
          {[1, 2, 3].map((id) => (
            <div className="bg-white shadow p-4 rounded-xl" key={id}>
              <h3 className="font-bold text-lg text-gray-600">
                Project Title {id}
              </h3>
              <p className="text-sm text-gray-500">
                Short project description goes here.
              </p>
              {/* Link to project detail page */}
              <Link
                href={`/projects/${id}`}
                className="text-indigo-600 font-medium  mt-2 inline-block hover:underline hover:font-bold px-3 py-2 rounded-3xl"
              >
                Live Demo
              </Link>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
