"use client";
import Image from "next/image";

import { book } from "@/models/book";

import { useShoppingCart } from "../context/shoppingCartContext";

export interface IShoppingCart {
    bookList: book[];
}

export default function ShoppingCart(props: IShoppingCart) {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartQuantity,
    } = useShoppingCart();

    function getPrice() {
        let price = 0;
        props.bookList.map((bookItem: book) => {
            price += bookItem.price * getItemQuantity(bookItem.id);
        });
        return price;
    }

    return (
        <div className="grid grid-cols-2 ml-48 mt-24">
            <div>
                {props.bookList != null &&
                    props.bookList
                        .filter((bookItem) => getItemQuantity(bookItem.id) > 0)
                        .map((bookItem: book) => {
                            return (
                                <div
                                    key={bookItem.id}
                                    className="rounded-lg md:w-2/3"
                                >
                                    <div className="justify-between mb-6 rounded-lg bg-gray-200 p-6 shadow-md sm:flex sm:justify-start">
                                        <Image
                                            src={bookItem.picture}
                                            alt="product-image"
                                            className="w-full h-36 rounded-lg sm:w-40"
                                            height={124}
                                            width={124}
                                        />

                                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                            <div className="mt-5 sm:mt-0">
                                                <h2 className="text-lg font-bold text-gray-900">
                                                    {bookItem.title}
                                                </h2>

                                                <p className="mt-1 text-xs text-gray-700">
                                                    price: {bookItem.price}$
                                                </p>
                                            </div>
                                            <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                                <div className="flex items-center border-gray-100">
                                                    <div
                                                        className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                                        onClick={() =>
                                                            decreaseCartQuantity(
                                                                bookItem.id
                                                            )
                                                        }
                                                    >
                                                        -
                                                    </div>
                                                    <input
                                                        className="h-8 w-8 border bg-white text-center text-xs outline-none"
                                                        type="number"
                                                        value={getItemQuantity(
                                                            bookItem.id
                                                        )}
                                                        min="1"
                                                    />
                                                    <div
                                                        className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                                        onClick={() =>
                                                            increaseCartQuantity(
                                                                bookItem.id
                                                            )
                                                        }
                                                    >
                                                        +
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-4">
                                                    <p className="text-sm"></p>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                                                        onClick={() =>
                                                            removeFromCart(
                                                                bookItem.id
                                                            )
                                                        }
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M6 18L18 6M6 6l12 12"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
            </div>
            <div className="mt-6 h-96 rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                <div className="mb-2 flex justify-between">
                    <p className="text-gray-700">Subtotal</p>
                    <p className="text-gray-700">{getPrice()}$</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-700">Shipping</p>
                    <p className="text-gray-700">15 $</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                    <p className="text-lg font-bold">Total</p>
                    <div className="">
                        <p className="mb-1 text-lg font-bold">
                            {getPrice() + 15}$
                        </p>
                        <p className="text-sm text-gray-700">including VAT</p>
                    </div>
                </div>
                <button className="mt-24 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                    Check out
                </button>
            </div>
        </div>
    );
}
