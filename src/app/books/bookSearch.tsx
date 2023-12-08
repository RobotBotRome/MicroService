"use client";

import "react-toastify/dist/ReactToastify.css";

import { Suspense, useState } from "react";

import { book } from "../../models/book";
import { AddToCartButton } from "../_components/AddToCartButton";
import BookLink from "./_components/BookLink";
export interface IBookSearch {
    books: book[];
}

export default function BookSearch(props: IBookSearch) {
    const [filteredList, setFilteredList] = useState<book[]>(props.books);

    return (
        <div className=" text-gray-900 rounded-lg">
            <input
                type="text"
                placeholder="search for books..."
                className="border border-700 gap-50 mb-8 P-24 p-4 mt-8 ml-8"
                onChange={(input) =>
                    setFilteredList(
                        props.books.filter((book) =>
                            book.title
                                .toLowerCase()
                                .includes(input.target.value.toLowerCase())
                        )
                    )
                }
            />

            <section>
                <Suspense fallback={<p>Loading feed...</p>}>
                    <div className=" grid grid-cols-3 gap-2 mr-24">
                        {filteredList.map((item: book) => (
                            <div
                                key={item.id?.toString()}
                                className="box-border shadow-md border-2 p-4 rounded-mds ml-32  border-gray-600 first-letter: bg-gradient-to-r from-gray-400 to-gray-200  text-black overflow-hidden"
                            >
                                <BookLink bookId={item.id} book={item} />

                                <AddToCartButton
                                    bookId={item.id}
                                    bookTitle={item.title}
                                />
                            </div>
                        ))}
                    </div>
                </Suspense>
            </section>
        </div>
    );
}
