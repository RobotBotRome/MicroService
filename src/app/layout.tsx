import "./globals.css";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";

import ShoppingCartImage from "./cart/shoppingCartImage";
import { ShoppingCartProvider } from "./context/shoppingCartContext";
const LinkStyle: CSSProperties = { marginRight: "125px", marginLeft: "125px" };

export const metadata: Metadata = {
    title: "A Book App",
    description: "Generated by dips learning",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <ShoppingCartProvider>
                <body className="bg-white shadow-sm mb-3">
                    <main className="font-bold grid  text-lg tracking-wide">
                        <nav className="flex items-center justify-between flex-wrap bg-gray-400 p-6">
                            <Link href="/">
                                <div className="flex items-center flex-shrink-0 text-white mr-6">
                                    <Image
                                        src="https://pngimg.com/uploads/letter_a/letter_a_PNG32.png"
                                        alt="a"
                                        className=""
                                        height={54}
                                        width={54}
                                    />
                                </div>
                            </Link>

                            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                                <div className=" lg:flex-grow">
                                    <Link
                                        href="/books"
                                        className="block mt-4 ml-16 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
                                    >
                                        Books
                                    </Link>
                                    <Link
                                        href="/authors"
                                        className="block mt-4 ml-16 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
                                    >
                                        Authors
                                    </Link>
                                </div>
                                <div>
                                    <ShoppingCartImage />
                                </div>
                            </div>
                        </nav>
                        {children}
                    </main>
                </body>
            </ShoppingCartProvider>
        </html>
    );
}
