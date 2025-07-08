import { motion } from "framer-motion";

const projects = [
  {
    title: "Spotify Clone",
    tech: "HTML, CSS, JavaScript",
    description: "A fully functional music player with custom folders and playback control.",
    source: "https://spotify-clone-eta-five-27.vercel.app",
  },
  {
    title: "X (Twitter) Clone",
    tech: "React, Tailwind CSS",
    description: "A responsive Twitter-style UI built using React and styled with Tailwind.",
    source: "https://twitter-clone-with-tailwind-k9zk.vercel.app",
  },
  {
    title: "React Todo App",
    tech: "React, Tailwind CSS",
    description: "CRUD Todo App with localStorage persistence and responsive layout.",
    source: "https://todo-app-react-qj93aputk-malik-usamas-projects-125d20f3.vercel.app#",
  },
  {
    title: "Password Manager",
    tech: "React, Express.js, MongoDB",
    description: "A full-stack password manager with backend integration and clean UI.",
    source: "https://password-manager-frontend-ochre.vercel.app",
  },
];

const Projects = () => {
  return (
    <section className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-green-400">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
            viewport={{ once: true }}
            className="p-6 border border-gray-700 rounded-2xl bg-[#161b22] shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-green-400 text-sm mb-2">{project.tech}</p>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-green-400 font-semibold hover:underline"
            >
              View Source
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
