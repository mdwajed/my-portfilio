import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" bg-indigo-600 text-white py-6 text-center md:py-12">
      <div className="flex justify-center gap-8 mb-4 text-lg">
        <Link
          href="https://github.com/your-username"
          target="_blank"
          className="hover:text-indigo-800 transition"
        >
          <FaGithub />
        </Link>

        <Link
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          className="hover:text-indigo-800 transition"
        >
          <FaLinkedin />
        </Link>
        <Link
          href="mailto:your-email@example.com"
          className="hover:text-indigo-800 transition"
        >
          <FaEnvelope />
        </Link>
        <Link
          href="https://facebook.com/your-profile"
          target="_blank"
          className="hover:text-indigo-400 transition"
        >
          <FaFacebook />
        </Link>
        <Link
          href="https://youtube.com/@your-channel"
          target="_blank"
          className="hover:text-indigo-800 transition"
        >
          <FaYoutube />
        </Link>
      </div>
      <p className="text-sm text-white">
        &copy; {new Date().getFullYear()} Abdul Wajed. All rights reserved.
      </p>
    </footer>
  );
}
