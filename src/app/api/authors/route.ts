import { NextResponse } from "next/server";

import { author } from "@/models/author";
import { pb } from "@/PocketBase/pocketBase";

export async function GET() {
    let authorList: author[] = [];
    try {
        authorList = await pb.collection("authors").getFullList({
            sort: "-created",
        });
    } catch (err) {
        console.log("get author list failed:" + err);
    }

    return NextResponse.json(authorList);
}
