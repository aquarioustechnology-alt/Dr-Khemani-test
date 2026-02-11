"use client";

import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex h-screen flex-col items-center justify-center bg-white text-center px-4">
            <h1 className="text-9xl font-bold text-[#C21975]">404</h1>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h2>
            <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                    href="/"
                    className="rounded-full bg-[#C21975] px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#a41562] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C21975] transition-all flex items-center gap-2"
                >
                    <MoveLeft className="h-4 w-4" /> Go back home
                </Link>
            </div>
        </div>
    );
}
