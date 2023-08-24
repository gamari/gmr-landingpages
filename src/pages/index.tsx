import { useState } from "react";
import { Inter, Sirin_Stencil } from "next/font/google";
import { AnimatePresence } from "framer-motion";

import { Loader } from "@/components/sample1/Loader";
import { Hero } from "@/components/sample1/Hero";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });
// const sirinStencil = Sirin_Stencil({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="flex flex-col space-y-3 items-center justify-center h-screen">
        <span>ポートフォリオ一覧</span>

        <ul className="">
          <li className="border border-gray-300  rounded-lg shadow">
            <Link
              href="/sample1"
              className="inline-block p-4 hover:bg-slate-50"
            >
              自己紹介サイト
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
