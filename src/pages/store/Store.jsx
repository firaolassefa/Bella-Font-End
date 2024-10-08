import { motion } from "framer-motion";
import { Header } from "./Header";
import { Products } from "./Products";
import { About } from "../Home/About";

const fadeInVariant = (direction = "up", delay = 0) => ({
  hidden: { opacity: 0, y: direction === "up" ? 50 : -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut", delay },
  },
});

export const Store = () => {
  return (
    <div className="px-24 py-12 w-full flex flex-col">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariant("down")}
      >
        <Header />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariant("up", 0.2)}
      >
        <Products />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariant("up", 0.4)}
      >
        <About />
      </motion.div>
    </div>
  );
};
