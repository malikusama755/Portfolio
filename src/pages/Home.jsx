import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="pt-24 min-h-[80vh] flex flex-col md:flex-row items-center justify-center px-6 md:px-12 text-center md:text-left gap-8 bg-[#0d1117]">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">
          Hi, I'm <span className="text-green-400">Usama Farooq</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl">
          A passionate Frontend React Developer who loves building smooth, modern, and responsive web applications.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex-1 max-w-xs w-full rounded-3xl overflow-hidden shadow-lg border-4 border-green-400"
      >
        <img
          src="/malikusama.jpeg"
          alt="Usama Farooq"
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Home;
