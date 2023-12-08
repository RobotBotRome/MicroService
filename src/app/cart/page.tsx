import Image from "next/image";

import { book } from "@/models/book";

import { getBookList } from "../functions/getBookList";
import ShoppingCart from "./shoppingCart";

export default async function Cart() {
    const listOfBooks: book[] = await getBookList();

    return (
        <div>
            <div className=" bg-gray-100 pt-20">
                <h1 className="mb-10 text-center text-2xl font-bold">
                    Cart Items
                </h1>

                <ShoppingCart bookList={listOfBooks} />
            </div>
        </div>
    );
}
