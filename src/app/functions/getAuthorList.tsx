import { author } from "@/models/author";

export async function getAuthorList() {
    const authorList = await fetch("http://localhost:3000/api/authors");
    const returnList: author[] = await authorList.json();
    return returnList;
}
