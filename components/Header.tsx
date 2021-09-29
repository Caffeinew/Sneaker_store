import React from "react";
import { BiShoppingBag, BiSearch, BiMenuAltRight } from "react-icons/bi";
import Link from "next/link";
import MotionButton from "./MotionButton";
import { IShoppingCart } from "../types/types";
import ShoppingCartModal from "./ShoppingCartModal";
import { AnimatePresence } from "framer-motion";

interface HeaderProps {
  shoppingCart: IShoppingCart;
  setShoppingCart: (x: IShoppingCart) => void;
}
const Header: React.FC<HeaderProps> = ({ shoppingCart, setShoppingCart }) => {

  const openShoppingCart = React.useCallback((): void => {
    setShoppingCart({ ...shoppingCart, isOpen: true });
  }, [shoppingCart]);

  const closeShoppingCart = React.useCallback((): void => {
    setShoppingCart({ ...shoppingCart, isOpen: false });
  }, [shoppingCart]);
  
  return (
    <div className="text-gray-500 font-light text-lg select-none">
      <div className="grid grid-cols-12 border-b">
        <div className="w-full h-full grid place-items-center">
          <MotionButton>
            <BiSearch className="w-10 h-10 p-2" />
          </MotionButton>
        </div>
        <div className="col-span-10 w-full h-14 grid place-items-center border-r border-l">
          <h1>Тут новость</h1>
        </div>
        <div className="w-full h-full grid place-items-center">
          <MotionButton openModal={openShoppingCart}>
            <BiShoppingBag className="w-10 h-10 p-2" />
          </MotionButton>
          <AnimatePresence>
            {shoppingCart.isOpen && (
              <ShoppingCartModal
                products={shoppingCart.products}
                closeModal={closeShoppingCart}
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="grid grid-cols-12 border-b shadow-sm">
        <div className="w-full h-full grid place-items-center">
          <h1 className="text-2xl font-medium">LOGO</h1>
        </div>
        <div className="col-span-10 w-full h-24 flex justify-center items-center place-items-center border-r border-l">
          <Link href="/new">
            <a className="mx-8">Новая коллекция</a>
          </Link>
          <Link href="/male">
            <a className="mx-8">Мужчины</a>
          </Link>
          <Link href="/female">
            <a className="mx-8">Женщины</a>
          </Link>
          <Link href="/sale">
            <a className="mx-8 font-medium ">Скидки 🔥</a>
          </Link>
        </div>

        <div className="w-full h-full grid place-items-center">
          <MotionButton>
            <BiMenuAltRight className="w-12 h-12 p-2" />
          </MotionButton>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
