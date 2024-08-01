import Logo from "@/components/logo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Logo className="max-w-32 mb-2" />
      <h1>Hello, Readers!</h1>
      <Link
        href="/admin/dashboard"
        className="mt-2 bg-slate-300 px-4 py-2 rounded-lg"
      >
        Dashboard
      </Link>
    </div>
  );
}
