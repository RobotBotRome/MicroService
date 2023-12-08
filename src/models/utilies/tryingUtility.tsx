import { author } from "../author";
import { book } from "../book";

type withoutAuthorName = Omit<author, "name">;
type authorCountry = Pick<author, "country">;

const testBookReqired: Required<book> = {
    id: "ee",
    price: 22,
    title: "ee",
    author: "ww",
    pages: 22,
    series: "bookSeries",
    picture: "www.picture.com",
};

const testBookWithMissingTitle: Partial<book> = {
    id: "eew",
    author: "www",
    pages: 222,
    picture: "wwww.picture.com",
};

const testBook = {
    id: "eew",
    title: "ewe",
    author: "www",
    pages: 222,
    picture: "wwww.picture.com",
};

const testOmit: withoutAuthorName = {
    id: "ok",
    picture: "",
    country: "",
};

const testPick: authorCountry = {
    country: "Testok",
};
