import { author } from "@/models/author";
import { book } from "@/models/book";

import AuthorSearch from "./authorSearch";

async function getAllAuthors() {
    const allAuthorsJson = await fetch("http://localhost:3000/api/authors");
    const authorList: author[] = (await allAuthorsJson.json()) || [];
    return authorList;
}

async function getAllBooks() {
    const allBooksJson = await fetch("http://localhost:3000/api/books");
    const bookList: book[] = await allBooksJson.json();
    return bookList;
}

export default async function Authors() {
    const bookList: book[] = await getAllBooks();

    const authorList: author[] = await getAllAuthors();

    return (
        <div className="mt-8 ml-8">
            {authorList ? (
                <AuthorSearch authors={authorList} books={bookList} />
            ) : (
                "No authors found"
            )}
        </div>
    );
}
