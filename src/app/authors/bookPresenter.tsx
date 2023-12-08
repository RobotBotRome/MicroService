"use client";
import "react-toastify/dist/ReactToastify.css";

import Image from "next/image";
import Link from "next/link";

import { book } from "@/models/book";

import { AddToCartButton } from "../_components/AddToCartButton";

export interface IBookPresenter {
    oneBook: book;
}

export default function BookPresenter(props: IBookPresenter) {
    const { id, title, picture } = props.oneBook;

    return (
        <div className="flex border-2 m-8">
            <Link className=" mr-4 flex " href={`/books/${id}`} key={id}>
                <Image
                    src={picture}
                    alt="book picture"
                    className="object-cover "
                    height={124}
                    width={124}
                />
                <div className="ml-4 ">
                    <div>tile: {title}</div>
                    <div>id: {id}</div>
                </div>
            </Link>
            <div className="ml-96 mt-8">
                <AddToCartButton bookId={id} bookTitle={title} />
            </div>
        </div>
    );
}
