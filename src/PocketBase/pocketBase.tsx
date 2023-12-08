import PocketBase from "pocketbase";

export const pb = new PocketBase("http://127.0.0.1:8090");

export const dynamic = "auto",
    dynamicParams = true,
    revalidate = 0,
    fetchCache = "auto",
    runtime = "nodejs",
    preferredRegion = "auto";
