import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-24 bg-gradient-to-tr from-[#0d1117] via-[#111827] to-[#12181b] text-gray-300"
    >
      {/* Left: Text Content */}
      <motion.div
        className="flex-1 max-w-xl text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-extrabold text-green-400 mb-6">About Me</h2>
        <p className="mb-6 text-lg leading-relaxed">
          I'm a <span className="text-green-400 font-semibold">self-taught Frontend React Developer</span> based in Dina, Jhelum.  
          I specialize in building <span className="font-semibold">fast, responsive, and modern user interfaces</span> using React, Tailwind CSS, and the MERN stack.  
          I’m obsessed with clean UI, performance optimization, and constant learning.
        </p>
        <p className="mb-8 text-lg leading-relaxed">
          When I’m not coding, I’m improving my debugging skills, collaborating on GitHub, and refining my UI/UX knowledge.  
          My projects include full-stack applications and creative frontend clones that push my skills forward.
        </p>

        <Link
          to="/contact"
          className="inline-block px-8 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-semibold text-black transition"
        >
          Get in Touch
        </Link>
      </motion.div>

      {/* Right: Image or Illustration */}
      <motion.div
        className="flex-1 max-w-md mt-12 md:mt-0 md:ml-16 rounded-3xl overflow-hidden shadow-lg border-4 border-green-400"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img
          src="/malikusama.jpeg" 
          alt="Usama Farooq"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
};

export default About;
