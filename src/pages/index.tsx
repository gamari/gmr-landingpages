import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-3 items-center justify-center h-screen bg-gray-200">
        <span>ポートフォリオ一覧</span>

        <ul className=" flex flex-col gap-3">
          <li className="border bg-white border-gray-300  rounded-lg shadow hover:bg-slate-50">
            <Link href="/sample1" className="inline-block p-4">
              オシャレカフェ風
            </Link>
          </li>

          <li className="border bg-white border-gray-300  rounded-lg shadow  hover:bg-slate-50">
            <Link href="/company1" className="inline-block p-4">
              コーポレートサイト1
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
