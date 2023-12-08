import { NextResponse } from "next/server";

import { author } from "@/models/author";
import { book } from "@/models/book";
import { pb } from "@/PocketBase/pocketBase";

export async function GET() {
    const listOfBooks: book[] = await pb.collection("books").getFullList();
    return NextResponse.json(listOfBooks);
}
