import "react-toastify/dist/ReactToastify.min.css";

import Image from "next/image";
import { ToastContainer } from "react-toastify";

import { book } from "@/models/book";

import { AddToCartButton } from "../_components/AddToCartButton";

export interface IOneBook {
    bookList: book[];
    id: string;
}

export default function OneBook(props: IOneBook) {
    return (
        <div>
            {props.bookList != null &&
                props.bookList.map((oneBook) => {
                    if (oneBook.id === props.id) {
                        return (
                            <div className="mt-40 " key={oneBook.id}>
                                <div>
                                    <div className="ml-96">
                                        <Image
                                            src={oneBook.picture}
                                            alt={`picture of ${oneBook.title}`}
                                            height={124}
                                            width={124}
                                        />
                                    </div>
                                    <li className="mt-8 ml-96 grid">
                                        <ul className="grid grid-cols-6 ">
                                            Title:
                                            <div className="text-neutral-500">
                                                {oneBook.title}
                                            </div>
                                        </ul>
                                        <a
                                            href={`/authors/${oneBook.author.split(
                                                " "
                                            )}`}
                                        >
                                            <div className="grid grid-cols-6">
                                                Author:
                                                <div className="">
                                                    {oneBook.author}
                                                </div>
                                            </div>
                                        </a>

                                        <div className="grid grid-cols-6">
                                            Pages:
                                            <div className="">
                                                {oneBook.pages}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-6">
                                            <AddToCartButton
                                                bookId={oneBook.id}
                                                bookTitle={oneBook.title}
                                            />
                                        </div>
                                    </li>
                                    <ToastContainer />
                                </div>
                            </div>
                        );
                    }
                })}
        </div>
    );
}
