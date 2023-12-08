import Image from "next/image";

import { getAuthorList } from "@/app/functions/getAuthorList";
import { getBookList } from "@/app/functions/getBookList";

import BookPresenter from "../bookPresenter";

type AuthorPageProps = {
    params: {
        name: string;
    };
};

export default async function Name({ params }: AuthorPageProps) {
    let authorName: string = (" " + params.name)
        .slice(1)
        .replaceAll("%2C", " "); // deep copy to be able to modify
    const books = await getBookList();
    const authors = await getAuthorList();
    const [booksToPresent, authorList] = await Promise.all([books, authors]);

    return (
        <div className="ml-4 m-8">
            <div className="ml-4 m-8">
                {authorList != null &&
                    authorList.map((author) => {
                        if (author.name === authorName) {
                            return (
                                <div className="border flex" key={author.id}>
                                    <Image
                                        src={author.picture}
                                        alt="picture"
                                        className="h-48"
                                        height={124}
                                        width={124}
                                    />
                                    <div className="ml-4">
                                        <h1>{author.name}</h1>
                                        <h3>Country: {author.country}</h3>
                                    </div>
                                </div>
                            );
                        }
                    })}
                {
                    <div className="ml-4 mr-8 mt-16">
                        Books :
                        <div className="">
                            {booksToPresent != null &&
                                booksToPresent.map((book) => {
                                    if (
                                        book.author.toLocaleLowerCase() ===
                                        authorName.toLowerCase()
                                    ) {
                                        return (
                                            <BookPresenter
                                                key={book.id}
                                                oneBook={book}
                                            />
                                        );
                                    }
                                })}
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}
