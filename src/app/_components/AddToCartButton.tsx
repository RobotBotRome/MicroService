"use client";
import { toast } from "react-toastify";

import { useShoppingCart } from "../context/shoppingCartContext";

export type AddToCartProps = {
    bookId: string;
    bookTitle: string;
};

export const AddToCartButton = (props: AddToCartProps) => {
    const { increaseCartQuantity, getItemQuantity } = useShoppingCart();

    return (
        <button
            className=" mt-4 bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
            onClick={() => {
                increaseCartQuantity(props.bookId);
                toast.success(
                    `Added 1, total amount of ${props.bookTitle} : ${
                        getItemQuantity(props.bookId) + 1
                    } in shopping cart`,
                    {
                        position: toast.POSITION.TOP_CENTER,
                    }
                );
            }}
        >
            put item in cart
        </button>
    );
};
