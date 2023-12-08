import { getBookList } from "../../functions/getBookList";
import OneBook from "../oneBook";

type BookPageProps = {
    params: {
        id: string;
    };
};

export default async function BookInfo({ params }: BookPageProps) {
    let id = (" " + params.id).slice(1);
    id = id.replace("bookinfo,", "");
    const bookList = await getBookList();

    return (
        <div>
            <OneBook bookList={bookList} id={id} />
        </div>
    );
}
