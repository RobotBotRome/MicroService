import { getBookList } from "../functions/getBookList";
import BookSearch from "./bookSearch";

export default async function BookList() {
    const listOfBooks = await getBookList();

    return (
        <div>
            <BookSearch books={listOfBooks} />
        </div>
    );
}
