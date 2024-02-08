import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="py-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="bg-blue-400 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto text-center">
          <motion.h1
            className="text-4xl font-bold mb-4 py-4"
            variants={textVariants}
          >
            Task Management App
          </motion.h1>
          <motion.p className="mt-2" variants={textVariants}>
            Stay organized and boost your productivity!
          </motion.p>
          <Link to="/signUp">
            <motion.button
              className="btn btn-outline my-4 text-black"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              To Explore Register Now!!
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
