import React from "react";
import Image from "next/image";
import { BiHeart } from "react-icons/bi";
import { IProduct } from "../types/types";
import MotionButton from "./MotionButton";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  
  return (
    <div className="select-none">
      <MotionButton>
        <BiHeart className="w-16 h-16 p-4 border-2 rounded-full text-gray-300" />
      </MotionButton>
      <Image
        className="object-cover"
        src={product.images[0].url}
        width={480}
        height={380}
      />
      <h1 className="text-2xl font-light ml-2">{product.name}</h1>
      <div
        className="w-full flex justify-between items-center"
        style={{ color: "#DBA270" }}
      >
        <span className="text-3xl font-bold">{product.price} &#8381;</span>
        <button className="cursor-pointer text-lg">В корзину</button>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
