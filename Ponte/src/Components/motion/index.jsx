import { motion, transform } from "framer-motion";

export const EsqCentro = ({ children }) => {
  const variants = {
    hidden: { x: "-20%" },
    visible: { x: "0%", transition: { duration: 0.4 } },
  };
  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      {children}
    </motion.div>
  );
};

export const DirCentro = ({ children }) => {
  const variants = {
    hidden: { x: "20%" },
    visible: { x: "0%", transition: { duration: 0.4 } },
  };
  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      {children}
    </motion.div>
  );
};

export const Surgir = ({ children }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };
  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      {children}
    </motion.div>
  );
};

export const Hover = ({ children }) => {
  const variants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };
  return (
    <motion.div whileHover="hover" variants={variants}>
      {children}
    </motion.div>
  );
};
