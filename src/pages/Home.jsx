import { motion } from "framer-motion";
import { FaLaptopCode, FaChartLine, FaRocket, FaPalette } from "react-icons/fa";

const Home = () => {
  return (
    <section className="pt-24 min-h-[80vh] flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-12 text-center md:text-left gap-8 bg-[#0d1117]">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-white">
          Hi, I'm <span className="text-green-400">Usama Farooq</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-xl">
          A passionate Frontend React Developer who loves building smooth, modern, and responsive web applications.
        </p>

        <div className="mt-10">
         <h2 className="text-3xl sm:text-4xl font-bold mb-4">What I Offer</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[#161b22] p-5 rounded-2xl hover:shadow-md border border-green-600 transition-all">
              <FaLaptopCode className="text-green-400 text-3xl mb-3" />
              <h3 className="text-xl font-semibold text-white mb-1">Responsive React Websites</h3>
              <p className="text-gray-400 text-sm">Built with modern UI/UX principles and Tailwind CSS.</p>
            </div>
            <div className="bg-[#161b22] p-5 rounded-2xl hover:shadow-md border border-green-600 transition-all">
              <FaRocket className="text-green-400 text-3xl mb-3" />
              <h3 className="text-xl font-semibold text-white mb-1">Landing Pages</h3>
              <p className="text-gray-400 text-sm">Fast-loading, SEO-friendly pages tailored to your business.</p>
            </div>
            <div className="bg-[#161b22] p-5 rounded-2xl hover:shadow-md border border-green-600 transition-all">
              <FaChartLine className="text-green-400 text-3xl mb-3" />
              <h3 className="text-xl font-semibold text-white mb-1">Dashboards & Admin Panels</h3>
              <p className="text-gray-400 text-sm">Powerful interfaces with real-time features and clean design.</p>
            </div>
            <div className="bg-[#161b22] p-5 rounded-2xl hover:shadow-md border border-green-600 transition-all">
              <FaPalette className="text-green-400 text-3xl mb-3" />
              <h3 className="text-xl font-semibold text-white mb-1">Framer Motion Animations</h3>
              <p className="text-gray-400 text-sm">Sleek, modern animations that engage and delight users.</p>
            </div>
          </div>
        </div>

        <a
          href="https://wa.me/923072839337"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-white font-medium transition"
        >
          Message Me on WhatsApp
        </a>
      </motion.div>

      {/* Profile Picture */}
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
