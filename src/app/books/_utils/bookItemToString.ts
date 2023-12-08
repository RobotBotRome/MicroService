import { book } from "@/models/book";

export function bookItemToString(item: book, paramName: string) {
    switch (paramName) {
        case "Author":
            return item.author;
        case "Title":
            return item.title;
        case "Pages":
            return item.pages;
        case "Price":
            return item.price + " $";
        default:
            return "";
    }
}
