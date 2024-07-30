import Logo from "@/components/logo";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Logo className="max-w-32 mb-2" />
      <h1>Hello, Readers!</h1>
    </main>
  );
}
