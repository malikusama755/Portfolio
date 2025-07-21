import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-[#0d1117]  py-24"
    >
      <motion.div
        className="w-full max-w-3xl text-gray-300 text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
      >
        <h2 className="text-5xl font-bold mb-8 text-green-400">Contact Me 📞</h2>
        <p className="mb-6 text-lg">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:usamafaroq755@gmail.com"
            className="text-green-400 hover:underline"
          >
            usamafaroq755@gmail.com
          </a>
        </p>
        <p className="mb-6 text-lg">
          <strong>Phone:</strong>{" "}
          <a href="tel:03072839337" className="text-green-400 hover:underline">
            0307-2839337
          </a>
        </p>
        <p className="mb-6 text-lg">
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/malikusama755"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            malikusama755
          </a>
        </p>
        <p className="text-lg">
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/malikusamafarooq/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            malikusamafarooq
          </a>
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
