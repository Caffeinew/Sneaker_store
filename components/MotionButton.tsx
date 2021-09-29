import React from "react";
import { motion } from "framer-motion";

interface MotionButtonProps {
  openModal?: () => void;
  children: React.ReactNode;
}
const MotionButton: React.FC<MotionButtonProps> = ({ openModal, children }) => {
  return (
    <motion.span
      className="inline-block cursor-pointer"
      whileTap={{ scale: 0.9 }}
      onClick={openModal}
    >
      {children}
    </motion.span>
  );
};

export default React.memo(MotionButton);
