"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Blogs() {
  return (
    <motion.section className="space-y-4">
      <h2 className="text-2xl font-semibold">Latest Blogs</h2>
      {[1, 2, 3].map((id) => (
        <div key={id} className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-bold text-lg text-gray-500">Blog Title {id}</h3>
          <p className="text-sm text-gray-600">Blog excerpt goes here...</p>
          {/* Link to full blog detail page */}
          <Link
            href={`/blogs/${id}`}
            className="text-blue-600 mt-2 inline-block hover:underline hover:font-bold px-3 py-2 rounded-3xl"
          >
            Read More
          </Link>
        </div>
      ))}
    </motion.section>
  );
}
