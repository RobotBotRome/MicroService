"use client";
import Image from "next/image";
import Link from "next/link";

import { useShoppingCart } from "../context/shoppingCartContext";

export default function ShoppingCartImage() {
    const { cartQuantity } = useShoppingCart();

    return (
        <Link
            href="/cart"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        >
            <Image
                src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3216541/shopping-cart-icon-md.png"
                alt="cart"
                className="h-12 w-12"
                height={56}
                width={56}
            />
            <div
                className={
                    "font-bold text-red-700 text-2xl text-center mt-2 border" +
                    (cartQuantity == 0 ? "border" : "")
                }
            >
                {cartQuantity === 0 ? "" : cartQuantity}
            </div>
        </Link>
    );
}
