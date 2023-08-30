import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-3 items-center justify-center h-screen">
        <span>ポートフォリオ一覧</span>

        <ul className=" flex flex-col gap-3">
          <li className="border border-gray-300  rounded-lg shadow">
            <Link
              href="/sample1"
              className="inline-block p-4 hover:bg-slate-50"
            >
              オシャレカフェ風
            </Link>
          </li>

          <li className="border border-gray-300  rounded-lg shadow">
            <Link
              href="/company1"
              className="inline-block p-4 hover:bg-slate-50"
            >
              コーポレートサイト1
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
