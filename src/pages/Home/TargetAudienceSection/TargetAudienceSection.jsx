import { motion } from "framer-motion";
const TargetAudienceSection = () => {
  const userTypes = [
    {
      type: "Developers",
      benefits:
        "Access to cutting-edge tools and resources for efficient development.",
    },
    {
      type: "Corporate Professionals",
      benefits:
        "Stay updated on industry trends, network with peers, and enhance skills.",
    },
    {
      type: "Bankers",
      benefits:
        "Explore financial insights, regulatory updates, and networking opportunities.",
    },
    // Add more user types as needed
  ];

  return (
    <motion.section
      className="target-audience-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Who Can Benefit?</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {userTypes.map((user, index) => (
          <motion.div
            key={index}
            className="card bg-base-100 shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="card-body">
              <h2 className="card-title">{user?.type}</h2>
              <p>{user?.benefits}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default TargetAudienceSection;
