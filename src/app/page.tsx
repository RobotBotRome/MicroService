import { book } from "@/models/book";

import { getAuthorList } from "./functions/getAuthorList";
import { getBookList } from "./functions/getBookList";

export default async function HomePage() {
    const allBooks = await getBookList();
    const allAuthors = await getAuthorList();
    return (
        <div>
            <h1 className="flex justify-center mt-32">
                Go to books for searching books(
                {allBooks != null && allBooks.length} in store)
            </h1>

            <h1 className="flex justify-center mt-32">
                Go to Authors - {allAuthors.length} in the data base
            </h1>
        </div>
    );
}
