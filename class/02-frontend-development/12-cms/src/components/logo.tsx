import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <h1 className="relative text-6xl font-bold text-black dark:font-semibold dark:text-white">
        <span className="absolute left-[130px] top-[-20px] text-3xl">The</span>
        Collector
      </h1>
    </Link>
  );
}
