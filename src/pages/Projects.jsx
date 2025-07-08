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
    source: "#",
  },
];

const Projects = () => {
  return (
    <section className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-green-400">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <div key={i} className="p-4 border border-gray-700 rounded-xl bg-[#161b22]">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-2">{project.tech}</p>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              View Source
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;