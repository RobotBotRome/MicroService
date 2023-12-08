"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { author } from "@/models/author";
import { book } from "@/models/book";

export interface IAuthorSearch {
    authors: author[];
    books: book[];
}

export default function AuthorSearch(props: IAuthorSearch) {
    const [filteredList, setFilteredList] = useState<author[]>(props.authors);

    return (
        <div className=" text-gray-900">
            <input
                type="text"
                placeholder="search for author..."
                className="border border-gray-700 gap-50 mb-8 P-24 p-4"
                onChange={(input) => {
                    setFilteredList(
                        props.authors.filter((author) =>
                            author.name
                                .toLowerCase()
                                .includes(input.target.value.toLowerCase())
                        )
                    );
                }}
            />
            <div className=" grid grid-cols-3 gap-2 mr-24">
                {filteredList != null &&
                    filteredList.map((item: author) => (
                        <div
                            key={item.id?.toString()}
                            className="box-border p-4 rounded-mds ml-32 border-4 bg-gradient-to-r from-green-800 to-pink-200 break-inside-avoid-column text-black"
                        >
                            <Link href={`/authors/${item.name.split(" ")}`}>
                                <div className=" flex ">
                                    <div className="rounded-full overflow-hidden border-4 w-36 h-36 justify">
                                        <Image
                                            src={item.picture}
                                            alt="testok "
                                            width={136}
                                            height={136}
                                        />
                                    </div>
                                    <div className="p-4 flex-auto ml-8">
                                        <div className="grid grid-cols-2">
                                            Author:
                                            <div className="text-white">
                                                {item.name}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    );
}
