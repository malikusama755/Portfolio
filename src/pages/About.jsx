import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="pt-24 min-h-[80vh] flex flex-col md:flex-row items-center justify-center px-6 md:px-12 text-center md:text-left gap-8 bg-[#0d1117]">
    <motion.section
      className="p-6 max-w-3xl mx-auto text-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4 text-green-400">About Me</h2>
      <p className="mb-4">
        I'm a self-taught Frontend React Developer based in Dina, Jhelum. I specialize in building fast, responsive,
        and modern user interfaces using React, Tailwind CSS, and the MERN stack. I’m obsessed with clean UI,
        performance optimization, and constant learning.
      </p>
      <p className="mb-4">
        When I’m not coding, I’m improving my skills in debugging, collaborating on GitHub, or refining my UI/UX understanding.
        My projects include full-stack applications and creative frontend clones.
      </p>
    </motion.section>
  </section>)
};

export default About;
