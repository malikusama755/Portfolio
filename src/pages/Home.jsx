import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link
import { FaLaptopCode, FaChartLine, FaRocket, FaPalette } from "react-icons/fa";

const Home = () => {
  return (
    <section className="pt-24 min-h-[100vh] flex flex-col md:flex-row items-center pb-10 justify-center px-4 sm:px-6 md:px-12 text-center md:text-left gap-8 bg-[#0d1117]">
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

        {/* Quick Navigation for Mobile Users */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
          <Link
            to="/about"
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition"
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition"
          >
            Contact
          </Link>
        </div>

        {/* What I Offer Section */}
        <div className="mt-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">What I Offer</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[ 
              {
                icon: <FaLaptopCode className="text-green-400 text-3xl mb-3" />,
                title: "Responsive React Websites",
                desc: "Built with modern UI/UX principles and Tailwind CSS.",
              },
              {
                icon: <FaRocket className="text-green-400 text-3xl mb-3" />,
                title: "Landing Pages",
                desc: "Fast-loading, SEO-friendly pages tailored to your business.",
              },
              {
                icon: <FaChartLine className="text-green-400 text-3xl mb-3" />,
                title: "Dashboards & Admin Panels",
                desc: "Powerful interfaces with real-time features and clean design.",
              },
              {
                icon: <FaPalette className="text-green-400 text-3xl mb-3" />,
                title: "Framer Motion Animations",
                desc: "Sleek, modern animations that engage and delight users.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#161b22] p-5 rounded-2xl hover:shadow-md border border-green-600 transition-all"
              >
                {item.icon}
                <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp Button */}
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
