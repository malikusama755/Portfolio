import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      className="p-6 max-w-xl mx-auto text-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4 text-green-400">Contact</h2>
      <p className="mb-2">
        Email:{" "}
        <a
          href="mailto:usamafaroq755@gmail.com"
          className="text-green-400 hover:underline"
        >
          usamafaroq755@gmail.com
        </a>
      </p>
      <p className="mb-2">
        Phone: <span className="text-white">03072839337</span>
      </p>
      <p className="mb-2">
        GitHub:{" "}
        <a
          href="https://github.com/malikusama755"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:underline"
        >
          malikusama755
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/malikusamafarooq/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:underline"
        >
          malikusamafarooq
        </a>
      </p>
    </motion.section>
  );
};

export default Contact;
