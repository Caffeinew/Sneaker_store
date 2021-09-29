import React from "react";
import { IProduct } from "../types/types";
import { motion } from "framer-motion";
import ModalWrapper from "./ModalWrapper";

interface ShoppingCartModalProps {
  products: IProduct[];
  closeModal: () => void;
}
const ShoppingCartModal: React.FC<ShoppingCartModalProps> = ({
  products,
  closeModal,
}) => {
  return (
    <ModalWrapper closeModal={closeModal}>
      <motion.div
        className="fixed z-10 w-64 h-96 bg-white border border-gray-400 right-4 overflow-y-scroll"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
      >
        {products.map((product) => (
          <div key={product.id} className="flex items-center justify-between">
            <span> {product.name}</span>
            <span> {product.price}</span>
          </div>
        ))}
      </motion.div>
    </ModalWrapper>
  );
};

export default React.memo(ShoppingCartModal);
