import { book } from "@/models/book";

export async function getBookList() {
    const booksToPresent = await fetch("http://localhost:3000/api/books");
    const returnList: book[] = await booksToPresent.json();
    return returnList;
}
