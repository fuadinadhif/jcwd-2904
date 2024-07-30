import Image from "next/image";

export default function Logo({ className }: { className: string }) {
  return (
    <div className={className}>
      <Image
        src="/logo.svg"
        alt="An owl standing on top of books"
        // width={100}
        // height={100}
        width={0}
        height={0}
        className="w-full h-full"
      />
    </div>
  );
}
