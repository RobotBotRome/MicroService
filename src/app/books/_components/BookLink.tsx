import "react-toastify/dist/ReactToastify.css";

import Image from "next/image";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

import { book } from "@/models/book";

import { bookItemToString } from "../_utils/bookItemToString";

export type BookLinkProps = {
    bookId: string;
    book: book;
};

export default function BookLink(props: BookLinkProps) {
    const { bookId, book } = props;
    const titleArray: Array<string> = ["Title", "Author", "Pages", "Price"];

    return (
        <Link href={`/books/${bookId}`}>
            <div className="flex">
                <div className="">
                    <Image
                        src={book.picture}
                        alt={book.title}
                        width={48}
                        height={48}
                    />
                    <ToastContainer />
                </div>
                <div>
                    {titleArray.map((param) => {
                        return (
                            <div
                                key={param.toString()}
                                className="p-4 flex-auto ml-8"
                            >
                                <div
                                    className={
                                        "grid grid-cols-2 " +
                                        (param == "Title" ? "text-2xl" : "")
                                    }
                                >
                                    {param}
                                    <div className="text-white">
                                        {bookItemToString(book, param)}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Link>
    );
}
